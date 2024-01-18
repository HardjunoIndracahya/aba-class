import { jsxs, Fragment } from "./index-da9a68d1.js";

const ScheduleItem = ({ title, time }) => (
  <div className="border-t-2 border-b-2 border-white flex justify-between py-[0.50rem] w-72 px-3" data-aos="fade-up" data-aos-duration="600">
    <div className="w-[50%] text-base font-medium">{title}</div>
    <div className="flex justify-center items-center text-sm">{time}</div>
  </div>
);

const Schedule = () => (
  <Fragment>
    <ScheduleItem title="Pramuka" time="08.30-09.50" />
    <ScheduleItem title="Istirahat" time="09.50-10.05" />
    <ScheduleItem title="Leadership" time="10.05-11.25" />
  </Fragment>
);

export default Schedule;