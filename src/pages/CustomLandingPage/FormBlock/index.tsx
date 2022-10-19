import { ChangeEvent, FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../../../components/Button';
import customLandingPageService, { PREVIEW_URL } from '../../../shared/services/customLandingPage.service';

import { ContainerDiv, EmailDiv, FormDiv, TextP, TitleH2 } from './styles';
import { AppWrapperDiv } from '../../../styles';

const initialFormData = {
  email: '',
};

interface IProps {
  title: string;
  subTitle: string;
  embedCode: any;
}

const FormBlock: FC<IProps> = ({ title, subTitle }) => {
  const { pathname, search } = useLocation();
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.email || `${pathname}${search}`.includes(PREVIEW_URL)) return;

    customLandingPageService.submitForm({ ...formData, slug: pathname.substring(1) });

    setFormData(initialFormData);
  };

  return (
    <EmailDiv>
      <AppWrapperDiv>
        <ContainerDiv>
          <TitleH2>{title}</TitleH2>
          <TextP>{subTitle}</TextP>
          <FormDiv>
            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            <Button text="Submit" onClick={handleSubmit} />
          </FormDiv>
        </ContainerDiv>
      </AppWrapperDiv>
    </EmailDiv>
  );
};

export default FormBlock;
