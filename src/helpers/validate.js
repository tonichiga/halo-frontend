export const validateName = (value) => {
  let result = { status: true };

  if (value.length === 0) {
    result = { status: false, message: "this field is requied" };
    return result;
  }

  const arr = value.split("");

  for (let i = 0; i < arr.length; i += 1) {
    if (!isNaN(Number(arr[i]))) {
      result = { status: false, message: "Only letters allowed" };
      return result;
    }
  }

  return result;
};

export const validateBlankField = (value) => {
  let result = { status: true };

  if (value.length === 0) {
    result = { status: false, message: "this field is requied" };
  }

  return result;
};

export const validateNumber = (value) => {
  let result = { status: true };

  if (value.length === 0) {
    result = { status: false, message: "this field is requied" };
    return result;
  }

  if (isNaN(Number(value))) {
    result = { status: false, message: "Only number allowed" };
    return result;
  }

  if (value.length < 12) {
    result = { status: false, message: "Should contain 12 characters" };
    return result;
  }

  return result;
};
