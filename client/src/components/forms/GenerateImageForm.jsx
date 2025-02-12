import styled from "styled-components"
import Button from "../buttons/Button"
import TextInput from "../inputs/TextInput"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CreateIcon from '@mui/icons-material/Create';

const Form = styled.div`
    flex: 1;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 9%;
    justify-content: center;
`;
const Top = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;
const Title = styled.div`
    font-size: 28px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_primary};
`;
const Desc = styled.div`
    font-size: 17px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
`;
const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
`;
const Actions = styled.div`
    flex: 1;
    display: flex;
    gap: 8px;
`;

const GenerateImageForm = ({
    post,
    setPost,
    createPostLoading,
    generateImageLoading,
    setGenerateImageLoading,
    setCreatePostLoading
}) => {
    const generateImageFunc = () => {
        setGenerateImageLoading(true);
    };

    const createPostFunc = () => {
        setCreatePostLoading(true);
    };

    return (
        <Form>
            <Top>
                <Title>Generate Image with a Prompt</Title>
                <Desc>Write your prompt according to the image you want!</Desc>
            </Top>
            <Body>
                <TextInput
                    label="Author"
                    placeholder="Enter your name..."
                    name="name"
                    value={post?.author}
                    handelChange={(e) => setPost({ ...post, author: e.target.value })}
                />
                <TextInput
                    label="Image Promt"
                    placeholder="Write a detailed promt about the image you want to generate"
                    name="name"
                    rows="8"
                    textArea
                    value={post?.prompt}
                    handelChange={(e) => setPost({ ...post, prompt: e.target.value })}
                />
            </Body>
            <Actions>
                <Button
                    text="Generate Image"
                    flex
                    leftIcon={<AutoAwesomeIcon />}
                    isDisabled={post.prompt === ""}
                    onClick={() => generateImageFunc()}
                />
                <Button
                    text="Post Image"
                    flex
                    type="secondary"
                    leftIcon={<CreateIcon />}
                    isLoading={createPostLoading}
                    isDisabled={post.name === "" || post.prompt === "" || post.photo === ""}
                    onClick={() => createPostFunc()}
                />
            </Actions>
        </Form>
    )
}

export default GenerateImageForm