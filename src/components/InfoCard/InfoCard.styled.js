import styled from '@emotion/styled';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 680px;
    height: 510px;
    padding: 100px 40px;
    color: var(--color-main-text);
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    position: absolute;
    top: 0px;
    right: 0;

    @media (max-width: 1439px) {
        max-width: 328px;
        padding: 40px 30px;
    }
`;