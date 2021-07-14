-- drop database db_landingpage_pnv;
Create database db_landingpage_pnv;
use db_landingpage_pnv;

create table gallerry_image(
	id int auto_increment primary key,
    description varchar(255),
    name varchar(255),
    url_image varchar(255),
    content varchar(255),
    status varchar(255)
);
insert into gallerry_image value(1,'Note1','introduction','assets/image/introduction/banner-image.jpg','',true),
								(2,'Note2','introduction','assets/image/introduction/banner-image.jpg','',true),
                                (3,'Note3','introduction','assets/images/about/about-1.jpg','',true),
                                (4,'Note4','introduction','assets/images/about/about-2.jpg','',true),
                                (5,'Note5','new','assets/images/news/news1.jpg','company',true),
                                (6,'Note6','new','assets/images/news/news2.jpg','second-year',true),
                                (7,'Note7','new','assets/images/news/news3.jpg','third-year',true),
                                (8,'Note8','new','assets/images/news/news1.jpg','company',true),
                                (9,'Note9','new','assets/images/news/news1.jpg','company',true),
                                (10,'Note10','new','assets/images/news/news2.jpg','second-year',true),
                                (11,'Note11','new','assets/images/news/news3.jpg','third-year',true),
                                (12,'Note12','new','assets/images/news/news2.jpg','second-year',true);
                               
create  table introduction(
	id int auto_increment primary key,
    image varchar(255),
    title varchar(255),
    content varchar(255),
    descriptions varchar(255)
);
insert into introduction values(1,'image/banner/banner-image.jpg','Passerelles numériques Vietnam','A place to nurture young dreams','Let is build a strong and kind IT community together with the #itnuoiit . project'),
								(2,'image/banner/banner-image.jpg','WHO ARE WE?','Hello Everybody','Passerelles numériques
                                (PN) is a non-governmental organization from France,
                                was established in 2005 with the desire to facilitate the bar,
                                Teens with extremely difficult circumstances have the opportunity to learn and find
                                jobs in the field of information technology.Organization Passerelles numériques
                                started operating in Vietnam in 2010, headquartered in Da Nang city, under the operating license issued by the Ministry of Foreign Affairs of Vietnam. Up to now, PN Vietnam has provided scholarships to 326 students,
                               of which there are currently 89 students studying (Term 6 and Course 7). In 2017, PN Vietnam Foundation granted 45 full scholarships for 3-year College Information Technology training to disadvantaged young people in the Central and Central Highlands provinces of Vietnam, including: Nang, Quang Nam, Quang Ngai, Quang Binh, Quang Tri, Binh Dinh and Kon Tum.');
create table news(
	id int auto_increment primary key,
    name varchar(255),
    image varchar(255),
    title varchar(255),
    content varchar(255),
    id_url int,
    created_at date,
    foreign key (id_url) references gallerry_image(id)
);
insert into news values	(1,'company','assets/images/news/news1.jpg','Businesses do charity activities on a long-term and sustainable value scale','Bringing lasting and sustainable impacts to the community is the philanthropic direction of KMS Technology, a software services company with more than 1,000 employees in Vietnam and the US.',5,'2017/7/21'),
						(2,'second-year','assets/images/news/news2.jpg','Em đã chọn nói không','H. has chosen to say no to the prejudice that a girl should be old enough to get married to fulfill her filial piety. H. chose to say no with the thought that if she was poor, she did not need to study much, stayed at home to help her parents work to raise her younger brother...',6,'2021/7/21'),
						(3,'third-year','assets/images/news/news3.jpg','Hoa nở trong bão','Everyone is born with a destiny – That is what Tran T.Q., a 20th class Passerelles numériques Vietnam (PNV) student, and currently an information technology engineer, tells the story of his life. Like a flower in the midst of life is storms, the young girl has constantly strived towards a better future...',7,'2017/7/21');
create table students(
	id int primary key auto_increment,
    image varchar(255),
    quantity int,
	cource varchar(255),
    description varchar(255),
    id_url int,
    foreign key (id_url) references gallerry_image(id)
);

create table human_resource(
	id int auto_increment primary key,
    roles varchar(255),
    status bool,
    description varchar(255)
);
insert into human_resource values	(1,'staff',true,null),
									(2,'human_donation',true,null),
									(3,'organization_donate',true,null);
create table staffs(
	id int primary key auto_increment,
    name varchar(255),
    image varchar(255),
    phone varchar(255),
    position varchar(255),
    desription varchar(255),
    id_human int ,
	foreign key (id_human) references human_resource(id)
);
insert into staffs values(1,'Vo Hoang Thuy Trang','assets/images/team/team-1.png','(+84) 914744496','Managing Director',null,1),
(2,'Doan Trieu Thanh','assets/images/team/team-2.png','(+84) 912.747.919','Managing Director',null,1),
(3,'Chau Thi My Ngoc','assets/images/team/team-3.png','(+84) 905799597','Head of Education Department',null,1),
(4,'Huynh Thi Kim Oanh','assets/images/team/team-4.png','+84 (0) 905 202 205','Head of Foreign Affairs',null,1),
(5,'Dang Nguyen Uyen Phuong','assets/images/team/team-5.png','(+84) 935 940 248 ','Head of Administration',null,1),
(6,'Lucas SINROD','assets/images/team/team-6.png','84 799 321 433','Head of Training',null,1);


create table human_donation(
	id int primary key auto_increment,
    money DECIMAL(10,2) not null,
    payment_method varchar(255),
    your_name varchar(255),
    created_at date,
    email varchar(255),
    phone char(11),
    id_role int ,
    foreign key (id_role) references human_resource(id)
);
create table organization_donate(
	id int primary key auto_increment,
    money DECIMAL(10,2) not null,
    your_name varchar(255),
    payment_method varchar(255),
    created_at date,
    email varchar(255) unique,
    phone char(11),
    id_role int ,
    foreign key (id_role) references human_resource(id)
);

create table admissions_informations
(
	id int auto_increment primary key,
    title varchar(255),
    time date,
    object varchar(255),
    notification varchar(255),
    requirement varchar(255)
);

create table students_enrollment(
	id int,
    name varchar(255),
    address varchar(255),
    phone char(12),
    age char(2),
	email varchar(255),
    description varchar(255),
    created_at date
);

create table partners(
	id int auto_increment primary key,
	title varchar(255),
    name varchar(255),
	image varchar(255),
    content varchar(255),
    address varchar(255),
    email varchar(255),
    addres varchar(200),
    link varchar(255),
    id_url int,
    foreign key (id_url) references gallerry_image(id)
);

create table partners_vip(
	id int auto_increment primary key,
    name varchar(255),
    title varchar(255),
    messages varchar(255),
    email varchar(200) unique,
    notification varchar(255)
);

create table footer(
	id int auto_increment primary key,
    phone varchar(255),
    email varchar(200),
    location varchar(255),
    description varchar(255)
);
insert into footer value(1,'+84 236 3888 503','info.vietnam@passerellesnumeriques.org','4th floor, building B, 99 To Hien Thanh, Da Nang VIETNAM',null);

create table valuePNV(
	id int auto_increment primary key,
    name varchar(255),
    title varchar(255),	
    image varchar(255)
);
insert into valuePNV values(1,'high requirement',null,''),
(2,'Trust',null,''),
(3,'Responsibility',null,''),
(4,'Solidarity',null,''),
(5,'Repect',null,'');
create table Admin(
	id_admin int auto_increment primary key,
    name varchar(255),
    username varchar(255) unique,
    password varchar(255),
    avatar varchar(255)
);