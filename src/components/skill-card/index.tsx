import SkillCard from './SkillCard';
import CONFIG from '../../../gitprofile.config';

const Index = () => {
  const loading = false; // Set this to true if you are loading data

  return (
    <div>
      <SkillCard loading={loading} skills={CONFIG.skills.languages || []} title="Languages" />
      <br />
      <SkillCard loading={loading} skills={CONFIG.skills.ml || []} title="Machine Learning" />
      <br />
      <SkillCard loading={loading} skills={CONFIG.skills.tools || []} title="Tools" />
      <br />
      <SkillCard loading={loading} skills={CONFIG.skills.soft_skills || []} title="Soft Skills" />
    </div>
  );
};

export default Index;
