# Sheets 만들기

Ella's Notes는 정해진 양식대로 작성된 Sheets를 불러올 수 있습니다.  


::: tip 주요 제약사항
- Sheets의 제목이 `EN1_` 으로 시작해야 함
- 각 행에서 `lecture`, `order` 항목은 꼭 채워져 있어야 함
:::

<br/>

모바일에서 Sheets 작성에는 무리가 있으므로, 컴퓨터에서 진행합니다.  
브라우저에서 구글 로그인은 되어 있는 상태라고 가정하겠습니다.

## 사본 만들기

[공개 Sheets](template) 에서 `사본 만들기`를 통해 양식에 맞는 Sheets를 만듭니다.


여기서는 아래 Sheets를 활용해 봅시다.
- [📚 {Sheets} 비즈니스 이메일 주요 표현 (ChatGPT)](https://docs.google.com/spreadsheets/d/1AoXGMWJU1-22IS2oi2rTKsGpzXE50u4azPIJKY_1PjY/edit?usp=sharing)

<br/>

위 링크를 클릭해서 해당 Sheets를 열고, 아래 메뉴를 선택합니다.
- 파일 > 사본 만들기

![copy_1](/copy_1.jpg)

<br/>

제목을 적당히 바꿉니다. (나중에 바꿀 수 있음)  단, `EN_1` 으로 시작해야 합니다.

![copy_2](/copy_2.jpg)

<br/>

`doc_info` 탭의 내용은 앱의 home 화면에서 해당 과목을 표시하는 데 사용합니다.  
`descripton`을 적당히 바꿔 줍니다.  
`link`나 `image`는 그냥 삭제하셔도 됩니다.

![copy_3](/copy_3.jpg)

<br/>

스프레드시트 메인 화면에서 자신이 만들거나 공유받은 Sheets 들이 잘 보입니다.  
공개 Sheets 의 경우, 링크 타고 열어 본 적이 있으면 같이 리스팅 됩니다.

![copy_4](/copy_4.jpg)

<br/>

## Sheets 양식

Sheets는 정해진 양식에 맞춰 작성되어 있어야 합니다.

::: tip 주요 제약사항
- Sheets의 제목이 `EN1_` 으로 시작해야 함
- 각 행에서 `lecture`, `order` 항목은 꼭 채워져 있어야 함
- Sheets는 `doc_info` 탭에서 기본 정보를 제공해야 함
- Sheets의 탭 중에서 이름이 `_temp` 로 끝나는 탭은 앱에서 사용하지 않음
:::

<br>

### lecture, order
- `lecture` 열은 Chapter를 구분하는 key 역할을 합니다.
- `order` 열은 문장들의 순서를 나타냅니다.
- `order`가 `0`인 행은 해당 Chapter에 대한 정보를 가지고 있습니다.
- 본문은 `order`가 `0`보다 커야 합니다.
- `order`가 `1`로 끝나면 (ex. 11, 21, 31, ..., 111) 한 문단의 시작을 의미합니다.


### text
- 진하게
- 이탤릭
- 밑줄

## Sheets 활용 팁
- 단축키
- 맞춤법 검사
