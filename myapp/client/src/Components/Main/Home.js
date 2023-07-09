import React from 'react'
import bg from "../../assets/bg.webp";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationFact.webp"
import g1 from "../../assets/donation/g1.jpg"
import g2 from "../../assets/donation/g2.jpg"
import g3 from "../../assets/donation/g3.jpg"
import g4 from "../../assets/donation/g4.jpg"
const Home = () => {
    const temp = [
        { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
        { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
        { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
        { blood: "AB+", donate: "AB+", recieve: "Everyone" },
        { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
        { blood: "O-", donate: "Everyone", recieve: "O-" },
        { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
        { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" }
    ]
    const temp2 = [
        { title: "Registration", img: g1 },
        { title: "Seeing", img: g2 },
        { title: "Donation", img: g3 },
        { title: "Save Life", img: g4 },
    ]
    return (
        <div className="dark:text-white-900">
            <img src={bg} alt="" />
            <div className='grid grid-cols-2 place-items-center mt-6 px-52'>
                <div>
                    <img draggable={false} src={bg2} width="100%" alt="" />
                </div>
                <div>
                    <p className='text-center font-bold text-4xl text-gray-dark dark:text-white-900'>
                        Be the reason <br />for <br />someone's heartbeat
                    </p>
                </div>
            </div>
            <h1 className='font-bold text-center text-blood my-4 text-lg underline'>Learn About Donation</h1>
            <div className='flex px-20'>
                <div>
                    <img src={donationFact} width="90%" alt="" />
                    <p className='text-center'>
                        <code>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</code>
                    </p>
                </div>
                <div>
                    <table className='w-max' cellPadding={5}>
                        <tr>
                            <td colSpan={3} className="border bg-blood text-white-900 text-center font-bold">Compatible Blood Type Donors</td>
                        </tr>
                        <tr>
                            <th className='border w-max text-lg'>Blood Type</th>
                            <th className='border w-max text-lg'>Donate Blood To</th>
                            <th className='border w-max text-lg'>Receive Blood From</th>
                        </tr>
                        {temp.map((e) => {
                            return (
                                <tr>
                                    <td className='border w-max text-lg'>{e.blood}</td>
                                    <td className='border w-max text-lg'>{e.donate}</td>
                                    <td className='border w-max text-lg'>{e.recieve}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
            <p className='text-xl underline font-bold text-blood text-center mt-5 mb-5'>
                Blood Donation Process
            </p>
            <div className='grid grid-cols-2 place-items-center'>
  {temp2.map((e, i) =>
    <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2' key={i}>
      <div><img src={e.img} draggable={false} width="100%" alt="" /></div>
      <div className='m-4'>
        <h1 className='font-bold text-lg text-midnight dark:text-white-900'>{i + 1} - {e.title}</h1>
        <p className='text-justify'>
          {/* Content for each step */}
          {i === 0 && "Join Raktdhara and become a life-saving donor today! Register with us to create your profile, provide your contact information, and complete a simple medical questionnaire. By registering, you'll be part of our dedicated community, ready to make a difference through blood donation."}
          {i === 1 && "Find Blood Availability: Discover real-time information about blood availability in your area with Raktdhara. Easily search for specific blood types, locate nearby blood banks, and hospitals to ensure a seamless process for blood transfusion."},
          {i === 2 && "Donate Blood and Save Lives: Be a hero by donating blood through Raktdhara. Learn about the donation process, eligibility requirements, and post-donation care. Your contribution can make a significant impact in saving lives and bringing hope to those in need."},
          {i === 3 && "Witness the Impact: Experience the power of your donation through inspiring stories shared by recipients, their families, and donors. Discover how your contribution through Raktdhara has made a difference in people's lives and fostered a sense of community and hope."}
        </p>
      </div>
    </div>
  )}
</div>
            <br />
            <div className='w-full bg-blood text-white-900 h-max text-sm text-center font-bold'>
                <code>|Hare krishna| BloodLink @ {new Date().getFullYear()} || Made with ❤️ by Krisna Das</code>
            </div>
        </div>
    )
}

export default Home