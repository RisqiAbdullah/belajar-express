import db from "./koneksi.js";
export const getMahasiswa = (req, res) => { 
}
const getMahasiswa = (req, res) => {

const sql = "SELECT * FROM mahasiswa";
  db.query(sql, (error, result) => {
    res.send(result);
  });
};

export const getMahasiswaByNim = () => {
  const {nim, nama_lengkap, kelas, aalamat} = req.body
    const sql ="INSERT INTO mahasiswaa (nim, nama lengkap, kelas, alamat) VALUES (?,?,?,?)"
    db.query(sql, [nim, nama_lengkap, kelas, alamat], (error, result) => {
        if(error) {
            res.status(400)
            res.send(error)
        }
        res.status(201);
        res.json(result);
    })
};

export const createMahasiswa = (req, res) => {

  const sql = "INSERT INTO mahasiswaa (nim, nama lengkap, kelas, alamat) VALUES (?,?,?,?)"
  db.query(sql, [nim, nama_lengkap, kelas, alamat], (error, result) => {
    if(error) {
        res.status(400)
        res.send(error)
    }
    res.status(201);
    res.json(result);
})
}

export const updateMahasiswa = (req, res) => {
  const nim = req.query.nim;

  const {nama_lengkap, kelas, alamat} = req.body
  if(nim || nama_lengkap || kelas || alamat) {
    const query = `UPDATE mahasiswa SET nama_lengkap = "${nama_lengkap}", kelas = "${kelas}",
    alamat= "${alamat}" WHERE nim = ${nim}`;
    db.query(query, (error, result) => {
      if (error) res.status(400).send(error.nessage);

      res.json(result);
    });
  }
}

export const deleteMahasiswa = (req, res) => {
  const nim = req.query.nim
  const sql = "DELETE FROM mahasiswa WHERE nim = ?"
  db.query(sql, [nim], (error, result) => {
      if(error) {
          res.status(400)
          res.send(error)
      }
      res.status(200);
      res.json("data berhasil dihapus");
  })
}