import React, {useCallback, useState} from "react";
import ContainerLayout from "../components/app/ContainerLayout";
import TeacherFormWrapper from "../components/teachers/TeacherFormWrapper";
import TeacherTableWrapper from "../components/teachers/TeacherTableWrapper";
import TeacherView from "../components/teachers/TeacherView";

enum TeacherPageType{
    Table = 'table',
    View = 'view',
    Form = 'form'
}

export default function TeachersContainer(){
    const [show, setShow] = useState(TeacherPageType.Table);
    const [teacher, setTeacher] = useState({});
    const [data, setData] = useState<any>(
        [
            {
                _id: 1,
                fullName: "Asadbek Rejabboyev",
                country: "Tashkent",
                job: "Programmer",
                salary: "1000$",
                teacherNumber: 1000,
            },
            {
                _id: 2,
                fullName: "Ravshanbek Xaydarov",
                country: "Samarqand",
                job: "Coach",
                salary: "2000$",
                teacherNumber: 1001,
            },
            {
                _id: 3,
                fullName: "Javohir Sidiqov",
                country: "Buxoro",
                job: "Football Player",
                salary: "1500$",
                teacherNumber: 1002,
            },
            {
                _id: 4,
                fullName: "Zabixullo O'rinboyev",
                country: "Toshkent",
                job: "Football Player",
                salary: "1200$",
                teacherNumber: 1003,
            },  {
                _id: 5,
                fullName: "Doston Tursunov",
                country: "Namangan",
                job: "Football Player",
                salary: "1300$",
                teacherNumber: 1004,
            },  {
                _id: 6,
                fullName: "Xushnudbak Xudoyberdiyev",
                country: "Andijon",
                job: "Xuquqshunos",
                salary: "2000$",
                teacherNumber: 1005,
            },
        ]
    );
    
    const onsubmit = useCallback((value:any)=>{
       if(teacher){
        const newList = data.map((item: any) => {
            if (item._id === value._id) {
              const updatedItem = {
                ...item,
                fullName: value.fullName,
                country: value.country,
                job: value.job,
                salary: value.salary
              };
              return updatedItem;
            }
            return item;
          });
          setData(newList);

       }else{
        const dataOb = {
            ...value,
            teacherNumber: data[data.length - 1].teacherNumber + 1,
            _id: data[data.length - 1]._id + 1
        }
            setData((prev: any)=>[...prev, dataOb]);
       }
            setShow(TeacherPageType.Table)
    },[setData, setShow, teacher])


    const deleteTeacher = useCallback((value: any)=>{
        let filtered = data.filter((teacher: any) => {
            return teacher._id != value._id;
          });
          setData(filtered);
    },[data, setData])

 return (
        <ContainerLayout>
            {show == TeacherPageType.Table && (
                <TeacherTableWrapper 
                    createNew={()=>{
                        setShow(TeacherPageType.Form);
                        setTeacher("")
                    }}
                    deleteTeacher={deleteTeacher}
                    getTeacher={(row: any)=>{
                        setShow(TeacherPageType.Form);
                        setTeacher(row);
                    }} data={data}/>
            )}
            {show == TeacherPageType.View && (
                <TeacherView 
                    backTable={()=>setShow(TeacherPageType.Table)}
                    teacher={teacher}/>
            )}
            {show == TeacherPageType.Form && (
                <TeacherFormWrapper 
                    teacher={teacher}
                    backTable={()=>setShow(TeacherPageType.Table)}
                    onsubmit={(value: any)=>onsubmit(value)}

                    />
            )}
        </ContainerLayout>
    )
}