import Content from "components/Course/Content/Content";
import Header from "components/Course/Header/Header";
const Course = ({course}) =>{
    const {name, parts} = course;
    return (
        <div>
            <Header course={name}/>
            <Content parts={parts} />
        </div>

    )
}


export default Course;