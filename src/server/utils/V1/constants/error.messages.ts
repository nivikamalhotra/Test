export const ERROR = {
  CORP: {
    INVALID_USER: 'Invalid CSC user. Please try with valid CSC user!'
  },
  ENTITY: {
    INVALID_JOIN_CODE: 'Invalid join code. Please try with valid join code!'
  },
  USER: {
    PHONE_NUMBER_ALREADY_REGISTERED:
      'This phone number is already registered. Please use a different phone number!',
    ALREADY_EXIST: 'This email is already registered. Please use a different email!',
    RECIPIENT_DOES_NOT_EXIST: 'Shared user not registered!',
    ALREADY_SHARED: 'Same parent not allowed or already shared!',
    INVITE: {
      NOT_FOUND: 'No data found!'
    }
  },
  FILE_ERROR: 'File is Required.',
  NOT_AUTHORISED_SAB: 'You are not school admin.',
  INVALID_EMAIL: 'Invalid email format!',
  INVALID_DOB_AGE: 'Invalid DOB format or Age under 13 years!',
  INVALID_DOB_FORMAT: 'Invalid DOB format! Please try with valid DD/MM/YYYY format.',
  INVALID_DATE: "Invalid DOB value! DOB can't be a future date",
  EMAIL_REGISTERED: 'This email is already registered. Please use a different email!',
  PHONE_REGISTERED: 'This phone number is already registered. Please use a different phone number!',
  INVALID_MOBILE: 'Invalid Mobile format!',
  INVALID_NAME: 'Name must contain letters only!',
  INVALID_PARENT_FIRST_NAME: 'Invalid Parent first name!',
  INVALID_PARENT_LAST_NAME: 'Invalid Parent last name!',
  USER_NOT_VALID_ENTITY: 'User is not School Admin.',
  ENTITY_ALREADY_EXIST: 'School Admin already associated with the given mobile number.',
  INVALID_CHILD_FIRST_NAME: 'Invalid Child first name!',
  INVALID_CHILD_LAST_NAME: 'Invalid Child last name!',
  CHILD_GRADE: 'Child grade should be correct.',
  INVALID_USER_TYPE: 'Invalid User Type!',
  INVALID_SCHOOL_CODE: 'Invalid join code.Please try with valid join code!',
  INVALID_COLUMN: 'Invalid column. Please check the template',
  EMPTY_COLUMN: 'Please fill all the column.',
  COMMON_ERROR: 'Something went wrong. Please try again later!',
  INVALID_SECURITY_ANSWER: "Security answer mismatch! Please try with valid answer!",
  PIN_EXISTS: "Security PIN already exist!",
  PIN_NOT_EXISTS: "Security PIN don't exist!",
  NOT_REGISTERED_USER: 'You are not registered with us. Please sign up.',
  USERNAME_REGISTERED: 'Username is taken!',
  INVALID_FORMAT: 'Invalid Format used!',
  COGNITO: {
    INVALID: 'Cognito Token is invalid.',
    UNAUTHORIZED: 'Not an Authorized person.'
  },
  USER_NOT_EXIST: "User doesn't exist!",
  DOSSIER_UPLOAD_FILETYPE_ERROR: 'Wrong id passed. Not a FILE.',
  DOSSIER_FILE_ALREADY_EXISTS: 'File Already Exists.',
  DOSSIER_FILE_NOT_EXISTS: 'File does not exist.',
  INVALID_PARENTID: 'Invalid parent id.',
  USER_GRADE_BUCKET: 'Grade Bucket Is Not Added.',
  INTEREST_NOT_MAPPED_WITH_USER: 'Given Interest Is Not Mapped With User Qualification.',
  QUALIFICATION_NOT_MAPPERED: 'Qalification Is Not Include In Given Grade Bucket,',
  SESSION_EXPIRED: 'Session Expired. Please try again!',
  INVALID_OTP: 'Invalid OTP!',
  INVALID_CHILD: 'Invalid Chlid User or Deleted Child Profile.',
  INVALID_PIN: 'Please, Enter Valid PIN.',
  PIN_NOT_EXIST: 'Security PIN does not exist!',
  INVALID_ANS: 'Security answer mismatch, Please try with valid answer.',
  ADD_PIN: 'You can not create a child without set security PIN!',
  SCHOOL_LINKED: 'School already linked with current user!',
  SCHOOL_NOT_LINKED: 'School not linked with current user!',
  PACKAGE_IN_PROGRESS: 'Enable To Delink User Because Package In Progress.',
  UNAUTHORIZED: 'Unauthorized access!',
  UNAUTHORIZED_ADMIN_USER: 'Unauthorized user. Please provide try with valid Parent/Admin!',
  INVALID_PARENT_CHILD_MAP: 'This Parent/Admin not mapped with desired user!',
  INVALID_IMAGE: 'Only images are allowed!',
  STUDENT: {
    ALREADY_EXIST: 'Student already exist'
  },
  REFERRAL_CODE: 'Referral code is not valid!',
  QUALIFICATION: 'please select any of these (3rd Grade|4th Grade|5th Grade|6th Grade|7th Grade|8th Grade|9th Grade|10th Grade|11th Grade|12th Grade|Undergraduate|Postgraduate)'
};
