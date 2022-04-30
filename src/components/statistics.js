import statistics from '../partials/data.json';
// <Statistics>
export const Statistics = () => {
    return (
        <section class="statistics"
        style={{
                    margin: '0 auto',
                    marginTop: '10px',
                    border: '2px solid tomato',
                    width: '250px',
                    padding: '5px',
                    textAlign: 'center',
                    fontSize: 16,
                    color: '#010101',
                }}
        >
            <h2 class="title">Upload stats</h2>

            <ul class="stat-list"
            style={{
                    margin: '0 ',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: '0px',
                    listStyle: 'none',
                    textAlign: 'center',
                    fontSize: 16,
                color: '#010101',
                    // backgroundColor: 'tomato',
                }}
            >
                <li class="item" style={{padding: '5px',}}>
                    <span class="label"
                    style={{
                        padding: '5px',
                        display: 'block',
                        }}
                    >.docx</span>
                    <span class="percentage"
                    style={{
                        padding: '5px',
                        display: 'block',
                    }}
                    >4%</span>
                </li>

                <li class="item" style={{padding: '5px',}}>
                    <span class="label"
                    style={{
                        padding: '5px',
                        display: 'block',
                        }}
                    >.mp3</span>
                    <span class="percentage"
                    style={{
                        padding: '5px',
                        display: 'block',
                        }}
                    >14%</span>
                </li>

                <li class="item" style={{padding: '5px',}}>
                    <span class="label"
                    style={{
                        padding: '5px',
                        display: 'block',
                        }}
                    >.pdf</span>
                    <span class="percentage"
                    style={{
                        padding: '5px',
                        display: 'block',
                        }}
                    >41%</span>
                </li>
                <li class="item" style={{padding: '5px',}}>
                    <span class="label"
                    style={{
                        padding: '5px',
                        display: 'block',
                        }}
                    >.mp4</span>
                    <span class="percentage"
                    style={{
                        padding: '5px',
                        display: 'block',
                        }}
                    >12%</span>
                </li>
            </ul>
        </section>
    );
};