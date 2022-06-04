import db from "../connection.js";



export const createStudent = (data) => {
    const sql = "INSERT INTO datamurid (id, nama_siswa, kelas, jurusan) VALUES (?, ?, ?, ?);"

    db.query(sql, [data.id, data.nama, data.kelas, data.jurusan], (err) =>{
        if(err) throw err;
        console.log(err);
    })
}

export const updateStudentById = (data) => {
    const sql = "UPDATE datamurid SET nama_siswa = ?, kelas = ?, jurusan = ? WHERE id = ?;"

    db.query(sql, [data.nama, data.kelas, data.jurusan, data.id], (err) => {
        if(err) throw err;
        console.log(err);
    })
}

export const getStudentId = (id) => {
    const sql = "SELECT * FROM datamurid WHERE id  = ?;"

    return new Promise((resolve, reject) => {
        db.query(sql, [id], (err, results) => {
            if(err){
                console.log(err);
                return reject(err);
            }
            const result = JSON.parse(JSON.stringify(results))
            return resolve(result)
        })
    })
}

export const deleteStudentById = (id) => {
    const sql = "DELETE FROM datamurid WHERE id = ?;"

    db.query(sql, id, (err) => {
        if(err) throw err;
        console.log(err)
    })
}

export const getAllStudent = (id) => {
    const sql = "SELECT * FROM datamurid"

    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if(err){
                console.log(err);
                return reject(err)
            }
            return resolve(JSON.parse(JSON.stringify(results)))
        })    
    });
}