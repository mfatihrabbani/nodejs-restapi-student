import {
    createStudent,
    getStudentId,
    updateStudentById,
    deleteStudentById,
    getAllStudent
} from "../Models/Repository/studentRepository.js";

function generateID(){
    return new Date().getTime() * Math.random() * 100000;
}

export const postStudent = (req, res) => {
    try{
        const {nama, kelas, jurusan} = req.body;
        console.log(nama)
        if(!nama || !kelas || !jurusan) return res.status(404).send("Please input field");

        const data = {
            id: generateID(),
            nama,
            kelas,
            jurusan
        }

        createStudent(data);

        res.status(200).json({
            code: 200,
            status: "OK, CREATED",
            data: data
        })

    }catch(err){
        res.status(400).json({
            code:  400,
            status: "Failed",
            data: data
        })

        console.log(err)
    }
}

export const getStudent = async (req, res) => {
    try{
        const {id} = req.params;

        const result = await getStudentId(id);

        if(result.length == 0) return res.status(400).send("Student not found");

        res.status(200).json({
            code: 200,
            status: "OK",
            data: result
        })

    }catch(err){
        res.status(400).json({
            code:  400,
            status: "Failed",
        })

        console.log(err)
    }
}

export const updateStudent = (req, res) => {
    try{
        const {id} = req.params;
        const {nama, kelas, jurusan} = req.body;

        if(!nama || !kelas || !jurusan) return res.status(404).send("Please input field");

        const data = {
            id,
            nama,
            kelas,
            jurusan
        }

        updateStudentById(data);

        res.status(200).json({
            code: 200,
            status: "OK, UPDATED",
            data: data
        })

        

    }catch(err){
        res.status(400).json({
            code:  400,
            status: "Failed",
        })

        console.log(err)
    }
}

export const deleteStudent = async (req, res) => {
    try{
        const {id} = req.params;
        const result = await getStudentId(id)

        if(result.length == 0) return res.status(400).send("No one student to delete")

        deleteStudentById(id);

        res.status(200).json({
            code: 200,
            status: "OK"
        })

    }catch(err){
        res.status(400).json({
            code:  400,
            status: "Failed",
        })

        console.log(err)
    }
}

export const listStudent = async (req, res) => {
    try{
        const results = await getAllStudent();

        if(!results) return res.status(200).send("No one Student");

        res.status(200).json({
            code: 200,
            status: "OK",
            data: results
        })

    }catch(err){
        res.status(400).json({
            code:  400,
            status: "Failed",
        })

        console.log(err)
    }
}