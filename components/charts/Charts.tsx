import { Fragment } from 'react';
import { Chart } from "react-google-charts";

function Charts() {
    return (
        <Fragment>

            <Chart
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    [
                        'Element',
                        'Responses',
                        { role: 'style' },
                        {
                            sourceColumn: 0,
                            role: 'annotation',
                            type: 'string',
                            calc: 'stringify',
                        },
                    ],
                    ['Github', 8.94, '#F8B970', null],
                    ['Reddit', 10.49, '#A3D3FF', null],
                    ['Medium', 19.3, '#9896F6', null],
                ]}
                options={{
                    title: 'Survey Responses',
                    width: 600,
                    height: 400,
                    bar: { groupWidth: '95%' },
                    legend: { position: 'none' },
                }}
                // For tests
                rootProps={{ 'data-testid': '6' }}
            />

        </Fragment>

    );
}

export default Charts;
