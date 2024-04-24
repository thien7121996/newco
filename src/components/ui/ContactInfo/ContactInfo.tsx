import {
  ContactInfoColumn,
  ContactInfoHeading,
  ContactInfoItem,
  ContactInfoList,
  ContactInfoWrapper,
} from "./styles";

export const ContactInfo = () => {
  return (
    <ContactInfoWrapper>
      <ContactInfoColumn>
        <ContactInfoHeading>Contact us:</ContactInfoHeading>
        <ContactInfoList>
          <ContactInfoItem>
            <label>Telephone:</label>
            <span>(+81) 70-2822-7897</span>
          </ContactInfoItem>
          <ContactInfoItem>
            <label>Email:</label>
            <span>thinh.pham@corize.co.jp</span>
          </ContactInfoItem>
          <ContactInfoItem>
            <label>Japanese office:</label>
            <span>
              Tokyo, Minato-ku, Roppongi 6-1-20
              <br /> Roppongi Denki building 7F
            </span>
          </ContactInfoItem>
          <ContactInfoItem>
            <label>Vietnamese office:</label>
            <span>
              8F VIET Building, 199 Dong Da Street,
              <br /> Thach Thang Ward, Hai Chau District,
              <br /> Da Nang City
            </span>
          </ContactInfoItem>
          <ContactInfoItem>
            <label>Company website:</label>
            <span>https://corize.co.jp</span>
          </ContactInfoItem>
          <ContactInfoItem>
            <label>Business hours:</label>
            <span>10:00 - 19:00 JPT (Monday - Friday)</span>
          </ContactInfoItem>
        </ContactInfoList>
      </ContactInfoColumn>
      <ContactInfoColumn>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.791694432059!2d108.21337371076544!3d16.076295739184353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421838237b1849%3A0x230884480eb6cc2a!2zMTk5IMSQ4buRbmcgxJBhLCBUaOG6oWNoIFRoYW5nLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1713942799635!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </ContactInfoColumn>
    </ContactInfoWrapper>
  );
};
ContactInfo.displayName = "ContactInfo";
