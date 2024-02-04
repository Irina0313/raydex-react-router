import { Card, Typography } from 'antd';
import { usageAreas } from '../../lib/constants';
import { useNavigate } from 'react-router-dom';
import styles from './usage.module.scss';

const { Meta } = Card;

export const UsageCards = () => {
  const navigate = useNavigate();
  const handleCardClick = (key: string) => {
    navigate(`/usage/${key}`);
  };

  return (
    <div className={styles.usageContainer}>
      {' '}
      <Typography.Title level={2} className={styles.title}>
        Применение
      </Typography.Title>
      <div className={styles.usageCardsWrapper}>
        <div className={styles.leftSection}>
          {usageAreas.map((a, index) => (
            <>
              {index !== 4 && (
                <Card
                  className={styles.card}
                  onClick={() => handleCardClick(a.key)}
                  key={a.key}
                  hoverable
                  cover={<img alt={a.name} src={a.imgSrc} />}
                >
                  <Meta
                    title={
                      <div
                      /*  style={{
                          textWrap: 'wrap',
                          overflow: 'visible',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }} */
                      >
                        {a.name}
                      </div>
                    }
                  />
                </Card>
              )}
              {index === 4 && (
                <Card
                  className={`${styles.card} ${styles.lastCardLeft}`}
                  onClick={() => handleCardClick(a.key)}
                  key={a.key}
                  hoverable
                  cover={<img alt={a.name} src={a.imgSrc} />}
                >
                  <Meta
                    title={
                      <div
                      /*  style={{
                          textWrap: 'wrap',
                          overflow: 'visible',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }} */
                      >
                        {a.name}
                      </div>
                    }
                  />
                </Card>
              )}
            </>
          ))}
        </div>
        <div className={styles.rightSection}>
          {usageAreas.map((a, index) => (
            <>
              {index === 4 && (
                <Card
                  className={`${styles.card} ${styles.lastCard}`}
                  onClick={() => handleCardClick(a.key)}
                  key={a.key}
                  hoverable
                  cover={<img alt={a.name} src={a.imgSrc} />}
                >
                  <Meta
                    className={styles.meta}
                    title={
                      <div

                      /*  style={{
                          textWrap: 'wrap',
                          overflow: 'visible',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }} */
                      >
                        {a.name}
                      </div>
                    }
                  />
                </Card>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
