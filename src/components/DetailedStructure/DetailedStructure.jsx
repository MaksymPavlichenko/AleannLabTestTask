import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { ReactComponent as IconShare } from '../../images/share.svg';
import { ReactComponent as IconLocation } from '../../images/location.svg';
import { ReactComponent as IconArrow } from '../../images/arrow.svg';
import { ReactComponent as IconBookmark } from '../../images/bookmark.svg';
import { 
    MainInfoWrap,
    HeaderWrap,
    HeaderTitle,
    HeaderList,
    HeaderItem,
    ButtonApply,
    WrapInfo,
    InfoTitle,
    InfoSalary,
    InfoSalaryText,
    InfoSalaryValue,
    Post,
    Description,
    ButtonApplyBottom,
    WrapSecondary,
    ImgSection,
    ImgTitle,
    ImgList,
    ImgItem,
    Image,
    AddInfoSection,
    AddInfoTitle,
    AddInfoWrap,
    AddInfoSubTitle,
    AddInfoList,
    AddInfoItemType,
    AddInfoItemBenefits,
    ContactsTitle,
    ContactsWrap,
    ContactsText,
    Circle,
    ContactsName,
    ContactsAddress,
    ContactsConnect,
    ContactsMap,
    BackLink,
    BackText,
} from './DetailedStructure.styled';

const DetailedStructure = ({ job }) => {
  const currentLocation = useLocation();
  const {
    title,
    salary,
    updatedAt,
    description,
    employment_type,
    benefits,
    pictures,
    name,
    address,
    phone,
    email,
    location: { lat, long },
  } = currentLocation.state.job;

  const Map = ({ job }) => {  
    return (
    <div>
      <p>{name}</p>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <div>
        <img
          src={`https://static.maps.2gis.com/1.0?s=404x222&pt=${lat},${long}&z=2`}
          alt="job.name"
        />
      </div>
    </div>
  );
};

  return (
    <>
    <MainInfoWrap>
      <HeaderWrap>
        <HeaderTitle>Job details</HeaderTitle>
        <HeaderList>
          <HeaderItem>
            <IconBookmark width={25} height={25} />
            <p>Save to my list</p>
          </HeaderItem>
          <HeaderItem>
            <IconShare width={20} height={20} />
            <p>Share</p>
          </HeaderItem>
        </HeaderList>
      </HeaderWrap>
      <ButtonApply type="button">Apply Now</ButtonApply>
      <WrapInfo>
        <InfoTitle>{title}</InfoTitle>
        <InfoSalary>
          <InfoSalaryText>Brutto, per year</InfoSalaryText>
          <InfoSalaryValue>&euro; {salary.replaceAll('k', ' 000')}</InfoSalaryValue>
        </InfoSalary>
      </WrapInfo>
      <Post>Posted {moment(updatedAt).fromNow()}</Post>
      <Description>{description}</Description>
      <ButtonApplyBottom type="button">Apply Now</ButtonApplyBottom>
    </MainInfoWrap>
    <WrapSecondary>
      <ImgSection>
        <ImgTitle>Attached images</ImgTitle>
          <ImgList>
            {pictures.map((picture, index) => (
              <ImgItem key={index}>
                <Image src={picture} alt={name} loading="lazy" />
              </ImgItem>
            ))}
          </ImgList>
      </ImgSection>
      <AddInfoSection>
        <AddInfoTitle>Additional info</AddInfoTitle>
          <AddInfoWrap>
            <div>
              <AddInfoSubTitle>Employment type</AddInfoSubTitle>
                <AddInfoList>
                  {employment_type.map(type => (
                    <AddInfoItemType key={type}>{type}</AddInfoItemType>
                  ))}
              </AddInfoList>
            </div>
            <div>
              <AddInfoSubTitle>Benefits</AddInfoSubTitle>
                <AddInfoList>
                  {benefits.map(benefit => (
                    <AddInfoItemBenefits key={benefit}>{benefit}</AddInfoItemBenefits>
                  ))}
                </AddInfoList>
            </div>
          </AddInfoWrap>
        </AddInfoSection>
    </WrapSecondary>
     
     <ContactsTitle>Contacts</ContactsTitle>
     <ContactsWrap>
       <ContactsText>
         <Circle></Circle>
         <ContactsName>
           <p>Deparment name.</p>
           <p>{name}.</p>
         </ContactsName>
         <ContactsAddress>
           <IconLocation width={13} height={19} />
           <p>{address}</p>
         </ContactsAddress>
         <ContactsConnect>
           <p>{phone},</p>
           <p>{email}</p>
         </ContactsConnect>
       </ContactsText>
       <ContactsMap>
         <Map job={job} />
       </ContactsMap>
    </ContactsWrap>
   
    <BackLink href='/AleannLabTestTask'>
      <IconArrow width={10} height={18} />
      <BackText>Return to job board</BackText>
    </BackLink>
   </>
                
  );
};

export default DetailedStructure;
