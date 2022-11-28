/* eslint-disable no-return-await */
import axios from 'axios';
import qs from 'qs';

export const kakaoPrms = qs.stringify({
  grant_type: 'authorization_code',
  client_id: '3ca328ac27939261df75188afd4c7ea2',
  redirect_uri: 'http://localhost/login/oauth2/code/kakao',
  client_secret: 'tpjyILNx047b40f17DkoR4R7pqTuD2Kv',
  code: 'QsdCRZ4mYd4SRLE2NnapJ863w3_NUKlvNMMAElssWvRpkhHSk-LhonZijs1T53B3iqt9Swo9dRsAAAGEniY4eA',
});

export const postToken = async prms => {
  const headers = {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
  };
  const postUrl = 'https://kauth.kakao.com/oauth/token';
  return await axios.post(postUrl, prms, headers).then(res => console.log(res));
};

// QrTeb7G1aKgJ8eqJodAXvj3oyMOEXygvjSxrE0uvCinJXgAAAYSeLd1Z
