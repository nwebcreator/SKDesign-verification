import LogoSrc from '../../assets/img/logo.png';
import styled from 'styled-components';

const Description = styled.div`
    padding-right: 60px;
    @media (max-width: 768px) {
        flex-wrap: wrap;
        margin-left: 10px;
        width: 360px;
      }
`;

const Logo = styled.img`
    margin-top: 40px;
    width: 475px;
    height: 70px;
`;

const VerificationTitle = styled.h1`
    margin-top: 35px;
    margin-bottom: 40px;
    font-family: 'Open Sans', sans-serif;
    font-size: 26px;
    color: #353238;
`;

const VerificationText = styled.p`
    margin-top: 25px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #353238;
    @media (max-width: 768px) {
        margin-top: 7px;
      }
`;

const DescriptionComponent = () => {
    return (
        <Description>
            <Logo src={LogoSrc} alt="Логотип компании SK DESIGN" />
            <VerificationTitle>Оставьте заявку и станьте частью нашей команды</VerificationTitle>
            <VerificationText>Компания SK Design приглашает к взаимовыгодному сотрудничеству креативных
                дизайнеров, архитекторов и декораторов, дизайн-бюро и интерьерные студии — все, кто дизайн интерьера
                сделали своим призванием.
            </VerificationText>
            <VerificationText>Партнерство мы видим как доверительные отношения, основанные на честности
                реализации бизнес идей в сфере создания и продаж современной, качественной, удобной, функциональной и
                эксклюзивной мебели.
            </VerificationText>
            <VerificationText>Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете интерьеры
                жилых или коммерческих помещений — мы с радостью поможем Вам: составим уникальные условия
                сотрудничества, предоставим 3D модели (уточняйте у менеджеров) и разработаем коммерческое предложение к
                Вашему проекту или изображениям.
            </VerificationText>
        </Description>
    );
};

export default DescriptionComponent;