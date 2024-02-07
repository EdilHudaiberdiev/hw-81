import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app/store';
import Spinner from '../../Components/UI/Spinner/Spinner';
import {apiUrl} from '../../constants';
import {makeFromOriginalToShort} from '../LinksThunk';

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const link = useSelector((state: RootState) => state.links.link);
  const isLoading = useSelector((state: RootState) => state.links.isLoading);
  const [form, setForm] = useState({
    originalUrl: '',
  });

  const changeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.originalUrl.trim().length > 0) {
      dispatch(makeFromOriginalToShort(form));
    }
  };

  return (
    <div className="container">
      <div className="py-5">
        <h2>Short your url</h2>
        <form onSubmit={submitForm} className="mb-5">
          <div className="mb-3 w-75 mx-auto">
            <input
              type="text"
              name="originalUrl"
              placeholder="Enter url"
              id="originalUrl"
              className="form-control"
              value={form.originalUrl}
              onChange={e => changeForm(e)}
            />
          </div>
          <button disabled={form.originalUrl.trim().length === 0} type="submit"
                  className="btn btn-primary">Shorten!
          </button>

        </form>

        {isLoading ? <Spinner/> :
          <>
            {link === null ? null :
              <>
                <a href={link.originalUrl} target="_blank">{apiUrl}{link.shortUrl}</a>
              </>
            }
          </>
        }
      </div>
    </div>
  );
};

export default Home;