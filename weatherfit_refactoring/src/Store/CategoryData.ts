
import { create } from "zustand";


export const CategoryData = create<CategoryStore>((set)=>({
    categoryData : [
        {
            id: 1,
            title : "상의",
            value : "top",
            selectLists : [
                {
                    list_id : 1,
                    selectList : "맨투맨"
                }, 
                {
                    list_id : 2,
                    selectList : "셔츠/블라우스"
                }, 
                {
                    list_id : 3,
                    selectList : "후드티"
                }, 
                {
                    list_id : 4,
                    selectList :"니트/스웨터"
                }, 
                {
                    list_id : 5,
                    selectList :"반팔티"
                }, 
                {
                    list_id : 6,
                    selectList :"카라티"
                }, 
                {
                    list_id : 7,
                    selectList :"긴팔티"
                }, 
                {
                    list_id : 8,
                    selectList :"민소매"
                }, 
                {
                    list_id : 9,
                    selectList :"스포츠"
                }, 
                {
                    list_id : 10,
                    selectList : "기타 상의"
                }
            ]
        },
        {
            id: 2,
            title : "아우터",
            value : "outer",
            selectLists : [
                {
                    list_id : 1,
                    selectList :"후드 집업"
                },
                {
                    list_id : 2,
                    selectList :"가디건"
                },
                {
                    list_id : 3,
                    selectList :"베스트"
                },
                {
                    list_id : 4,
                    selectList :"플리스"
                },
                {
                    list_id : 5,
                    selectList :"아노락"
                },
                {
                    list_id : 6,
                    selectList :"블루종"
                },
                {
                    list_id : 7,
                    selectList :"라이더 자켓"
                },
                {
                    list_id : 8,
                    selectList :"트러커 자켓"
                },
                {
                    list_id : 9,
                    selectList :"무스탕"
                },
                {
                    list_id : 10,
                    selectList :"블레이저"
                },
                {
                    list_id : 11,
                    selectList :"싱글 코트"
                },
                {
                    list_id : 12,
                    selectList :"더블 코트"
                },
                {
                    list_id : 13,
                    selectList :"더플 코트"
                },
                {
                    list_id : 14,
                    selectList :"롱패딩"
                },
                {
                    list_id : 15,
                    selectList :"숏패딩"
                },
                {
                    list_id : 16,
                    selectList :"기타 아우터"
                }
            ]
        },
        {
            id: 3,
            title : "하의",
            value : "pants",
            selectLists : [
                {
                    list_id : 1,
                    selectList :"데님 팬츠"},
                {
                    list_id : 2,
                    selectList :"코튼 팬츠"},
                {
                    list_id : 3,
                    selectList :"슬랙스"},
                {
                    list_id : 4,
                    selectList :"트레이닝 팬츠"},
                {
                    list_id : 5,
                    selectList :"조거 팬츠"},
                {
                    list_id : 6,
                    selectList :"숏 팬츠"},
                {
                    list_id : 7,
                    selectList :"레깅스"},
                {
                    list_id : 8,
                    selectList :"점프 슈트"},
                {
                    list_id : 9,
                    selectList :"스포츠 하의"},
                {
                    list_id : 10,
                    selectList :"기타 하의"}
            ]
        },
        {
            id: 4,
            title : "신발",
            value : "shoes",
            selectLists : [
                {
                    list_id : 1,
                    selectList :"스니커즈"},
                {
                    list_id : 2,
                    selectList :"컨버스"},
                {
                    list_id : 3,
                    selectList :"워커"},
                {
                    list_id : 4,
                    selectList :"로퍼"},
                {
                    list_id : 5,
                    selectList :"보트화"},
                {
                    list_id : 6,
                    selectList :"슬립온"},
                {
                    list_id : 7,
                    selectList :"운동화"},
                {
                    list_id : 8,
                    selectList :"구두"},
                {
                    list_id : 9,
                    selectList :"부츠"},
                {
                    list_id : 10,
                    selectList :"플랫 슈즈"},
                {
                    list_id : 11,
                    selectList :"블로퍼"},
                {
                    list_id : 12,
                    selectList :"샌들"},
                {
                    list_id : 13,
                    selectList :"슬리퍼"},
                {
                    list_id : 14,
                    selectList :"기타 신발"}
            ]
        },
        {
            id: 5,
            title : "가방",
            value : "back",
            selectLists : [
                {
                    list_id : 1,
                    selectList :"백팩"},
                {
                    list_id : 2,
                    selectList :"메신저백"},
                {
                    list_id : 3,
                    selectList :"크로스백"},
                {
                    list_id : 4,
                    selectList :"숄더백"},
                {
                    list_id : 5,
                    selectList :"토트백"},
                {
                    list_id : 6,
                    selectList :"에코백"},
                {
                    list_id : 7,
                    selectList :"더플백"},
                {
                    list_id : 8,
                    selectList :"클러치백"},
                {
                    list_id : 9,
                    selectList :"이스트백"},
                {
                    list_id : 10,
                    selectList :"기타 가방"}
            ]
        },
        {
            id: 6,
            title : "모자",
            value : "hat",
            selectLists : [
                {
                    list_id : 1,
                    selectList :"베레모"},
                {
                    list_id : 2,
                    selectList :"페도라"},
                {
                    list_id : 3,
                    selectList :"버킷/사파리햇"},
                {
                    list_id : 4,
                    selectList :"비니"},
                {
                    list_id : 5,
                    selectList :"트루퍼"},
                {
                    list_id : 6,
                    selectList :"기타 모자"}
            ]
        }
    ]
}));