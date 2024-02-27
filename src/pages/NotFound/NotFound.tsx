import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/catalog')
    }
    return (
        <>
            <div>Страница не найдена</div>
            <Button callback={goBack}>Назад</Button>
        </>
    )
}

export default NotFound