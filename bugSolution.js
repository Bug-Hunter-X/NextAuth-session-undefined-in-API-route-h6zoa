```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './auth/[...nextauth]'; //Import authOptions

const handler = async (req, res) => {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    // Access session data
    console.log(session);
    res.json({ message: 'Success', session });
  } catch (error) {
    console.error('Error getting session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export default handler;```