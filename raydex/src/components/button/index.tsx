import { Button } from 'antd';
import { useState } from 'react';

interface ICustomButtonProps {
  text: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  handleClick?: () => void;
}

const CustomButton = ({ text, htmlType, handleClick }: ICustomButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: hovered ? '#5085ba' : '#2e69ad',
    borderRadius: '6px',
    borderColor: '#5085ba',
    width: '120px',
    height: '40px',
    fontSize: '16px',

    letterSpacing: '0.6px',
  };

  const hoverHandler = () => {
    setHovered(!hovered);
  };

  return (
    <Button
      type='primary'
      htmlType={htmlType || undefined}
      style={buttonStyle}
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
      onClick={handleClick}
    >
      {text.toUpperCase()}
    </Button>
  );
};

export default CustomButton;
