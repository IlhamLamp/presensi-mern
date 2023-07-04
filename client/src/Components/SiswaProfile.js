// var SiswaProfile = (function() {
//     var nisn_siswa = localStorage.getItem('nisn_siswa') || '';  
//     var getNisn = function() {
//       return nisn_siswa;    // Or pull this from cookie/localStorage
//     };
  
//     var setNisn = function(nisn) {
//       nisn_siswa = nisn;     
//       localStorage.setItem('nisn_siswa', nisn)
//       // Also set this in cookie/localStorage
//     };
  
//     return {
//       getNisn: getNisn,
//       setNisn: setNisn
//     }
  
//   })();
  
// export default SiswaProfile;

const SiswaProfile = {
  setSiswaData: (siswaData) => {
    localStorage.setItem('siswaData', JSON.stringify(siswaData));
  },
  
  getSiswaData: () => {
    const data = localStorage.getItem('siswaData');
    return JSON.parse(data);
  },

  clearSiswaData: () => {
    localStorage.removeItem('siswaData');
  }
}

export default SiswaProfile
