import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.style";
import categories from '../../utils/json/categories.json';

const Directory = () => {

    return (
        <DirectoryContainer>
            {
                categories.map((category) => <DirectoryItem key={category.id} category={category} />)
            }
        </DirectoryContainer>
    );
};

export default Directory;