import { supabase } from './supabaseClient'

// メールとパスワードでサインアップ
export const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    })
    return { data, error }
}

// メールとパスワードでログイン
export const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    return { data, error }
}

// ログアウト
export const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
}

// 現在のユーザー情報を取得
export const getCurrentUser = async () => {
    const { data, error } = await supabase.auth.getUser()
    return { data, error }
}