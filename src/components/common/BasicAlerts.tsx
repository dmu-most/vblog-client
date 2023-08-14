import * as React from 'react';

// material UI 사용하는 import (라이브러리 설치해서 import만 하면 됩니다!)
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// **2023/08/07 Alert 공통 사용
export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {/* error alert */}
      <Alert severity="error">This is an error alert — check it out!</Alert>
      {/* warning alert */}
      <Alert severity="warning">This is a warning alert — check it out!</Alert>
      {/* check info alert */}
      <Alert severity="info">This is an info alert — check it out!</Alert>
      {/*  check alert */}
      <Alert severity="success">This is a success alert — check it out!</Alert>
    </Stack>
  );
}
