// import React, { useState, useEffect } from "react";

// function EventList({ pageId }) {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         `https://graph.facebook.com/${pageId}/events?access_token=${process.env.REACT_APP_FB_ACCESS_TOKEN}`
//       );
//       const data = await response.json();
//       setEvents(data.data);
//       console.log(data)

//     };
//     fetchData();
//   }, [pageId]);

// //   console.log(pageId)
//   console.log(events)

//   return (
//     <div>
//       <h2>Upcoming Events</h2>
//       {events.map((event) => (
//         <div key={event.id}>
//           <h3>{event.name}</h3>
//           {/* <p>{event.description}</p>
//           <p>{event.start_time}</p>
//           <p>{event.place.name}</p> */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default EventList;

//////////////////////////////// TEST

import React, { useState, useEffect } from "react";

function ProfileDetails({ userId }) {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const response = await fetch(
        `https://graph.facebook.com/${userId}?fields=name,picture,cover,about,work,education,posts,friends&access_token=${process.env.REACT_APP_FB_ACCESS_TOKEN}`
      );
      const data = await response.json();
      setProfileData(data);
    };
    fetchProfileData();
  }, [userId]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const { name, picture, cover, about, work, education, posts, friends } =
    profileData;

  return (
    <div>
      <h2>{name}</h2>
      <img src={picture.data.url} alt="Profile Picture" />
      {cover && <img src={cover.source} alt="Cover Photo" />}
      <p>About: {about}</p>
      {work && (
        <div>
          <h3>Work Experience</h3>
          <ul>
            {work.map((item) => (
              <li key={item.id}>
                {item.position.name} at {item.employer.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {education && (
        <div>
          <h3>Education</h3>
          <ul>
            {education.map((item) => (
              <li key={item.id}>
                {item.type}: {item.school.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {posts && (
        <div>
          <h3>Recent Posts</h3>
          <ul>
            {posts.data.map((post) => (
              <li key={post.id}>
                <p>{post.message}</p>
                <p>{post.created_time}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {friends && (
        <div>
          <h3>Friends</h3>
          <ul>
            {friends.data.map((friend) => (
              <li key={friend.id}>
                <img src={friend.picture.data.url} alt="Friend" />
                <p>{friend.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileDetails;
