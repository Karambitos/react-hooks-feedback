import { PieChart } from 'react-minimal-pie-chart';
import styles from './Graph.module.css';

export default function Graph({ options }) {
  const data = [
    { title: 'good', value: 0, color: '#00C853' },
    { title: 'neutral', value: 0, color: '#FFC107' },
    { title: 'bad', value: 0, color: '#D32F2F' },
  ];

  for (let keyData in data) {
    for (let keyOption in options) {
      if (data[keyData].title === keyOption) {
        data[keyData].value = options[keyOption];
      }
    }
  }

  return (
    <PieChart
      className={styles.pieChart}
      data={data}
      lineWidth={30}
      label={({ dataEntry }) => dataEntry.title}
      labelStyle={{
        fontSize: '5px',
        fontFamily: 'sans-serif',
        fill: '#fff',
      }}
      radius={40}
    />
  );
}
