import { useState } from 'react';
import styled from 'styled-components';
import GenerateImageForm from '../components/forms/GenerateImageForm';
import GeneratedImageCard from '../components/cards/GeneratedImageCard';

const Container = styled.div`
    height: 100%;
    overflow-y: scroll;
    padding: 30px 30px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background: ${({ theme }) => theme.bg}
    @media (max-width: 768px) {
        padding: 6px 10px;
    }
`;

const Wrapper = styled.div`
    flex: 1;
    width: 100%;
    height: fit-content;
    max-width: 1200px;
    gap: 8%;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const CreateImage = () => {
    const [generateImageLoading, setGenerateImageLoading] = useState(false);

    const [createPostLoading, setCreatePostLoading] = useState(false);

    const [post, setPost] = useState({
        author: "",
        prompt: "",
        photo: "",
    });

    return (
        <Container>
            <Wrapper>
                <GenerateImageForm
                    post={post}
                    setPost={setPost}
                    createPostLoading={createPostLoading}
                    generateImageLoading={generateImageLoading}
                    setGenerateImageLoading={setGenerateImageLoading}
                    setCreatePostLoading={setCreatePostLoading}
                />
                <GeneratedImageCard
                    src={post?.photo}
                    loading={generateImageLoading}
                />
            </Wrapper>
        </Container>
    )
}

export default CreateImage