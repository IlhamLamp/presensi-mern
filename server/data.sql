-- Kelas --
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('1','XA1','1');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('2','XA2','2');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('3','XA3','3');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('4','XIA1','4');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('5','XIA2','5');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('6','XIA3','6');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('7','XIIA3','7');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('8','XIIA3','8');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('9','XIIA3','9');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('10','XS1','10');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('11','XS2','11');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('12','XS3','12');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('13','XIS1','13');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('14','XIS2','14');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('15','XIS3','15');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('16','XIIS3','16');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('17','XIIS3','17');
INSERT INTO `kelas`(`id`, `kode_kelas`, `guru_id`) VALUES ('18','XIIS3','18');

-- Guru --
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('1','197184320','Dwi Reknowati, M.Pd','1','dwi123');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('2','198524680','Ahmad Zaenal Mutaqin, M.Pd','2','ahmad');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('3','198184850','Devri Yogaswara, S.Si','3','dev12');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('4','198780934','Arnadi, S.Pd','4','arnadi');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('5','199166650','Tera Ferita Asteria, S.Si','5','tera12');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('6','197220920','Budhi Suroso, A.Md','6','budhi');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('7','199042875','Urif Saputra, S.Pd','7','urif123');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('8','198539998','Yenny Ramdhani Putri, S.Pd','8','yeni');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('9','199364078','Reni Fitriani Rahayu, S.Pd','9','reni12');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('10','198576960','Lis Yuniarti, S.Pd','10','lis12');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('11','197468328','Ida Noerfaedah, M.Pd','11','ida123');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('12','197963554','Ibnu Hajar, S.Pd','12','ibnu');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('13','198047114','Dita Pertiwi Supendi, S.Pd','13','dita123');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('14','198606761','Nova Tri Haryanto, S.Pd','14','nova');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('15','197355332','Septi Ayu Ambarsari, S.Pd','15','septi');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('16','198762463','Maman, S.Pd','16','maman123');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('17','197713739','Rohyati, S.Pd','17','rohyati');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('18','197418818','Defrina Yuliyanti, S.Pd.I','18','yuli123');
INSERT INTO `guru`(`id`, `nip`, `nama`, `kelas_id`, `password`) VALUES ('19','196778251','Endang Misbah Kurniawan, S.Pd., M.M','','endang');

-- Siswa --
INSERT INTO `siswa`(`id`, `nisn`, `nama`, `kelas_id`, `password`) VALUES ('1','235994','Aida Nur Haqiqi','1','aida');
INSERT INTO `siswa`(`id`, `nisn`, `nama`, `kelas_id`, `password`) VALUES ('2','238816','Alya Islamiati Putri','1','alya');
INSERT INTO `siswa`(`id`, `nisn`, `nama`, `kelas_id`, `password`) VALUES ('3','236723','Aprila Avriani','1','aprila');
INSERT INTO `siswa`(`id`, `nisn`, `nama`, `kelas_id`, `password`) VALUES ('4','235417','Belda Nurmultiefa','1','belda');
INSERT INTO `siswa`(`id`, `nisn`, `nama`, `kelas_id`, `password`) VALUES ('5','231923','Bella Febriani','1','bella');
INSERT INTO `siswa`(`id`, `nisn`, `nama`, `kelas_id`, `password`) VALUES ('6','238152','Bita Kausari','1','bita');
INSERT INTO `siswa`(`id`, `nisn`, `nama`, `kelas_id`, `password`) VALUES ('7','232543','Candra Permana','1','candra');
INSERT INTO `siswa`(`id`, `nisn`, `nama`, `kelas_id`, `password`) VALUES ('8','233094','Cynthia Detifiany','1','cynthia');
INSERT INTO `siswa`(`id`, `nisn`, `nama`, `kelas_id`, `password`) VALUES ('9','236594','Danindra Armina','1','danindra');
INSERT INTO `siswa`(`id`, `nisn`, `nama`, `kelas_id`, `password`) VALUES ('10','236616','Denanda Fauziah','1','denanda');
INSERT INTO `siswa`(`id`, `nisn`, `nama`, `kelas_id`, `password`) VALUES ('11','234403','Devi Sri Wahyuni','1','devi');
INSERT INTO `siswa`(`id`, `nisn`, `nama`, `kelas_id`, `password`) VALUES ('12','235714','Diky Ginanjar','1','diky');