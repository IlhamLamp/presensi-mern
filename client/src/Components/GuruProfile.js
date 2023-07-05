const GuruProfile = {
    setGuruData: (guruData) => {
      localStorage.setItem('guruData', JSON.stringify(guruData));
    },
    
    // getSiswaData: () => {
    //   const data = localStorage.getItem('siswaData');
    //   return JSON.parse(data);
    // },
  
    // clearSiswaData: () => {
    //   localStorage.removeItem('siswaData');
    // }
  }
  
  export default GuruProfile
  