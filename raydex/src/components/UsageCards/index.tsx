import { Card, Flex, Typography } from 'antd';
import { usageAreas } from '../../lib/constants';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

export const UsageCards = () => {
  const navigate = useNavigate();
  const handleCardClick = (key: string) => {
    navigate(`/usage/${key}`);
  };
  return (
    <div style={{ padding: '0 50px' }}>
      {' '}
      <Typography.Title
        level={2}
        style={{ fontWeight: 'bold', textAlign: 'left' }}
      >
        Применение
      </Typography.Title>
      <Flex wrap="wrap" gap={30} justify="center">
        {usageAreas.map((a) => (
          <Card
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: 400,
            }}
            onClick={() => handleCardClick(a.key)}
            key={a.key}
            hoverable
            cover={<img alt={a.name} src={a.imgSrc} />}
          >
            <Meta
              title={
                <div
                  style={{
                    textWrap: 'wrap',
                    overflow: 'visible',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {a.name}
                </div>
              }
            />
          </Card>
        ))}
      </Flex>
    </div>
  );
};
