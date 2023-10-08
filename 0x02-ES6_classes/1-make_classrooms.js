import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classrooms = [];
  const sizes = [19, 20, 34];
  for (const size of sizes) {
    const room = new ClassRoom(size);
    classrooms.push(room);
  }
  return classrooms;
}
