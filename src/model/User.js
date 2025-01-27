// src/model/User.js
export class User {
    constructor(id, uid, password, firstName, lastName, username, email, avatar, gender, phoneNumber, socialInsuranceNumber, dateOfBirth, employment, address, creditCard, subscription) {
      this.id = id;
      this.uid = uid;
      this.password = password;
      this.first_name = firstName;
      this.last_name = lastName;
      this.username = username;
      this.email = email;
      this.avatar = avatar;
      this.gender = gender;
      this.phoneNumber = phoneNumber;
      this.socialInsuranceNumber = socialInsuranceNumber;
      this.dateOfBirth = dateOfBirth;
      this.employment = employment;
      this.address = address;
      this.creditCard = creditCard;
      this.subscription = subscription;
    }
  
    static fromJson(data) {
      return new User(
        data.id,
        data.uid,
        data.password,
        data.first_name,
        data.last_name,
        data.username,
        data.email,
        data.avatar,
        data.gender,
        data.phone_number,
        data.social_insurance_number,
        data.date_of_birth,
        data.employment,
        data.address,
        data.credit_card,
        data.subscription
      );
    }
  }

export default User;