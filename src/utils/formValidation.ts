// ======================= 회원가입 폼 유효성 검사 =======================

/**
 * 2023/08/15 - 아이디 유효성 검사 - by sineTlsl
 * id의 길이가 4~12자 사이어야 하며, 알파벳 대소문자와 숫자로만 이루어져야 함
 * */
export const isValidId = (id: string) => {
  if (id.length < 4 || id.length > 12) return false;
  for (const char of id) {
    if (!/[A-Za-z0-9]/.test(char)) return false;
  }

  return true;
};

/**
 * 2023/08/15 - 닉네임 유효성 검사 - by sineTlsl
 * 별명의 길이가 2~8자 사이어야 하며, 한글과 알파벳, 숫자로만 이루어져야 함
 * */
export const isValidName = (name: string) => {
  if (name.length < 2 || name.length > 8) return false;
  for (const char of name) {
    if (!/[A-Za-z0-9가-힣]/.test(char)) return false;
  }

  return true;
};

/**
 * 2023/08/15 - 비밀번호 유효성 검사 - by sineTlsl
 * 비밀번호의 길이가 8~16자 사이어야 하며, 최소한 하나의 알파벳 대소문자와 숫자, 특수문자가 포함되어야 함
 * */
export const isValidPassword = (password: string) => {
  if (password.length < 8 || password.length > 16) return false;

  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (/[a-z]/.test(char)) hasLowerCase = true;
    if (/[A-Z]/.test(char)) hasUpperCase = true;
    if (/[0-9]/.test(char)) hasNumber = true;
    if (/[@$!%*?&]/.test(char)) hasSpecialChar = true;
  }

  return hasLowerCase && hasUpperCase && hasNumber && hasSpecialChar;
};
