import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';



export const App = () => {

const [stats, setStats] = useState ({
  good: 0,
  neutral: 0,
  bad: 0,
})


const optionsKeys = Object.keys(stats)
const {good,neutral,bad} = stats


const onLeaveFeedback = e => {
  const selectedFeedback = e.target.value;
  setStats(prevState => ({...prevState,[selectedFeedback]: prevState[selectedFeedback] + 1}))

}
 
const countTotalFeedback = () => {
  const { good, neutral, bad } = stats;
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = e => {
  // if (this.state.good === 0) {
  //   return 0;
  // }
  // console.log(this.state.good);
  // return ((100 / this.countTotalFeedback()) * this.state.good).toFixed(0);
  const { good } = stats;
  const total = countTotalFeedback();
  return total ? Number((100 / total) * good).toFixed(0) : 0;
};

const total = countTotalFeedback()


return (
  <div>
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={optionsKeys}
        onLeaveFeedback={onLeaveFeedback}
      />
    </Section>

    <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }

