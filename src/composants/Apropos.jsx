
import "./../Css/apropos.css";




const About = () => {
  const personalInfo = {
    name: 'Votre Nom',
    email: 'votre@email.com',
    imageSrc: 'url_de_votre_image.jpg',
  };

  const skills = [
    { skill: 'Compétence 1', percentage: 90 },
    { skill: 'Compétence 2', percentage: 80 },
    { skill: 'Compétence 3', percentage: 70 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-4">À propos de moi</h1>
      <div className="flex items-center justify-center">
        <div className="w-1/4 text-center">
          <img
            src={personalInfo.imageSrc}
            alt={personalInfo.name}
            className="w-32 h-32 rounded-full mx-auto"
          />
        </div>
        <div className="w-3/4 ml-4">
          <h2 className="text-xl font-semibold">{personalInfo.name}</h2>
          <p className="text-gray-600">{personalInfo.email}</p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Compétences</h2>
        {skills.map((item, index) => (
          <div key={index} className="mb-2">
            <p className="font-semibold">{item.skill}</p>
            <div className="bg-gray-200 w-full h-3 mt-1 rounded">
              <div
                className="bg-blue-500 h-3 rounded"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
