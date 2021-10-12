import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios, {AxiosError} from 'axios';

interface IFormData {
	email: string,
	password: string,
	returnSecureToken: boolean,
	isLogin: boolean
}

interface IInitialState {
	status: string | null,
	error: string | null,
	token: string | null,
	success: boolean;
}

const initialState: IInitialState = {
	status: null,
	error: null,
	token: null,
	success: false,
};

// Вход или регистрация ==================================================================================
export const authUser = createAsyncThunk(
	'auth/authUser',
	async function (formData: IFormData, {rejectWithValue, dispatch}) {

		const authData={
			email: formData.email,
			password: formData.password,
			returnSecureToken: true
		};

		const URL = formData.isLogin ? process.env.NEXT_PUBLIC_DB_LOGIN : process.env.NEXT_PUBLIC_DB_SIGNUP;

		try {
			const response = await axios({
				method: 'POST',
				url: URL,
				data: authData

			});

			const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);

			localStorage.setItem('token', response.data.idToken);
			localStorage.setItem('userId', response.data.localId);
			localStorage.setItem('expirationDate', `${expirationDate}`);

			setTimeout(() => {
				localStorage.removeItem('token');
				localStorage.removeItem('userId');
				localStorage.removeItem('expirationDate');
				dispatch(logout());
			}, response.data.expiresIn * 1000);

			return response.data.idToken;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response) {
					console.log(error.response);
					return rejectWithValue(error.message);
				} else {
					console.log(error.request);
					return rejectWithValue(error.message);
				}
			} else {
				console.log((error as Error).message);
				return rejectWithValue((error as Error).message);
			}
		}
	}
);

// Авто-логин в систему ==================================================================================
export const autoLogin = createAsyncThunk(
	'auth/authLogin',
	async function (_, {dispatch}) {
		const token = localStorage.getItem('token');
		if (!token) {
			dispatch(logout());
		} else {
			const date = localStorage.getItem('expirationDate');
			const expirationDate = date && new Date(date);

			if (expirationDate && expirationDate <= new Date()) {
				localStorage.removeItem('token');
				localStorage.removeItem('userId');
				localStorage.removeItem('expirationDate');
				dispatch(logout());
			} else {
				dispatch(authSuccess(token));
			}
		}
	}
);


// Slice ==================================================================================================
export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout(state) {
			state.token = null;
			state.success = false;
		},
		authSuccess(state, action: PayloadAction<string>) {
			state.token = action.payload;
			state.success = true;
		}
		
	},
	extraReducers: (builder) => builder
		.addCase(authUser.pending, (state, action) => console.log(''))
		.addCase(authUser.fulfilled, (state, action) => {
			state.status = 'resolved';
			state.token = action.payload;
			state.success = true;
		})
		.addCase (authUser.rejected, (state, action: any) => {
			state.status = 'rejected';
			state.error = action.payload;
			state.token = null;
			state.success = false;
		})
});

 export const {logout, authSuccess} = authSlice.actions;
 export default authSlice.reducer;