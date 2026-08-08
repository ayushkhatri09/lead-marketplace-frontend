const providerKYCFields = [
  {
    name: "profile_image",
    label: "Profile Image",
    type: "file",
    accept: "image/*",
  },
  {
    name: "aadhaar_front",
    label: "Aadhaar Front",
    type: "file",
    accept: "image/*",
  },
  {
    name: "aadhaar_back",
    label: "Aadhaar Back",
    type: "file",
    accept: "image/*",
  },
  {
    name: "pan_card",
    label: "PAN Card",
    type: "file",
    accept: "image/*",
  },
];

export default providerKYCFields;