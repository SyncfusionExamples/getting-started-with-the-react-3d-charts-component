import { Category3D, Chart3DComponent,Chart3DSeriesCollectionDirective,
  Legend3D,Chart3DSeriesDirective, ColumnSeries3D, Inject, DataLabel3D,
  Tooltip3D } from '@syncfusion/ej2-react-charts';
import './App.css';

let data: any[] = [
  { name: 'Tesla', sales: 137429 },
  { name: 'Aion', sales: 80308 },
  { name: 'Wuling', sales: 76418 },
  { name: 'Changan', sales: 52849 },
  { name: 'Geely', sales: 47234 },
  { name: 'Nio', sales: 31041 },
  { name: 'Neta', sales: 22449 },
  { name: 'BMW', sales: 18733 }
];

function App() {
  return (
    <div className="App">
     <Chart3DComponent primaryXAxis={{
        valueType: 'Category', 
    }} 
    tilt={10} enableRotation={true} depth={100}
    title='Top Selling Electric Cars in China'
    legendSettings={{visible:true}} tooltip={{enable:true}}
     >
     <Inject services={[ColumnSeries3D, Category3D,Legend3D,DataLabel3D,Tooltip3D]} />
     <Chart3DSeriesCollectionDirective >
        <Chart3DSeriesDirective dataSource={data} xName='name' yName='sales'
         name='Sales' dataLabel={{visible:true}}  >
        </Chart3DSeriesDirective>
    </Chart3DSeriesCollectionDirective>
     </Chart3DComponent>
    </div>
  );
}

export default App;
