import StatisticsLine from 'components/Statistics/StatisticsLine'


const Statistics = ({good, neutral, bad}) =>{
    const all = good + neutral + bad;
    if(all == 0){
        return(<p>No FeedBack given</p>);
    }

    const average = all !== 0 ? (good - bad) / all : 0;
    const positive = all !== 0 ? (good / all) * 100 : 0;


    return (
        <>
            <h2>Statistiques: </h2>
            <table>
                <tbody>
                    <StatisticsLine text="Good" value={good} />
                    <StatisticsLine text="Neutral" value={neutral} />
                    <StatisticsLine text="Bad" value={bad} />

                    <StatisticsLine text="All" value={all} />
                    <StatisticsLine text="Average" value={average} />
                    <StatisticsLine text="Positive" value={positive} />
                </tbody>
        </table>
      </>
    );
}

export default Statistics;