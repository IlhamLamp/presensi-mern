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
