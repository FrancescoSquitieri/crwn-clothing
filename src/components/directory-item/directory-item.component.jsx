import { useNavigate } from 'react-router-dom';
import {
    DirectoryItemBackgroundImg,
    DirectoryItemBody,
    DirectoryItemContainer,
    DirectoryItemText,
    DirectoryItemTitle,
} from './directory-item.styles';
const DirectoryItem = ({ category }) => {

    const { title, imageUrl, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <DirectoryItemBackgroundImg imageUrl={imageUrl} />
            <DirectoryItemBody>
                <DirectoryItemTitle>{title}</DirectoryItemTitle>
                <DirectoryItemText>Shop Now</DirectoryItemText>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;