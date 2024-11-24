from save_test_data import save_test_data

def main():
    # テスト用のデータ
    test_instrument = "Guitar"
    test_goal = "Learn chords"
    test_level = 3
    test_genre = "Rock"

    # 関数を呼び出し
    save_test_data(test_instrument, test_goal, test_level, test_genre)

    print("データが保存されました！")

if __name__ == "__main__":
    main()
