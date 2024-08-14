PGDMP      9                |           price_prophet    16.2    16.3 (Homebrew)                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    24621    price_prophet    DATABASE     o   CREATE DATABASE price_prophet WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE price_prophet;
                postgres    false                       0    0    DATABASE price_prophet    ACL     5   GRANT ALL ON DATABASE price_prophet TO priceprophet;
                   postgres    false    3608                        2615    24624    property    SCHEMA        CREATE SCHEMA property;
    DROP SCHEMA property;
                postgres    false                       0    0    SCHEMA property    ACL     .   GRANT ALL ON SCHEMA property TO priceprophet;
                   postgres    false    5                       0    0    SCHEMA public    ACL     ,   GRANT ALL ON SCHEMA public TO priceprophet;
                   pg_database_owner    false    6            �            1259    24643    Property    TABLE     �  CREATE TABLE property."Property" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    bathrooms integer NOT NULL,
    bedrooms integer NOT NULL,
    city text NOT NULL,
    country text NOT NULL,
    "homeStatus" text NOT NULL,
    "homeType" text NOT NULL,
    "imgSrc" text NOT NULL,
    "isUnmappable" boolean NOT NULL,
    latitude double precision NOT NULL,
    "livingArea" double precision NOT NULL,
    longitude double precision NOT NULL,
    "lotAreaUnit" text NOT NULL,
    "lotAreaValue" double precision NOT NULL,
    price double precision NOT NULL,
    "priceForHDP" double precision NOT NULL,
    "rentZestimate" double precision NOT NULL,
    state text NOT NULL,
    "streetAddress" text NOT NULL,
    "taxAssessedValue" double precision NOT NULL,
    zestimate double precision NOT NULL,
    zipcode text NOT NULL,
    zpid integer NOT NULL
);
     DROP TABLE property."Property";
       property         heap    priceprophet    false    5            �            1259    24642    Property_id_seq    SEQUENCE     �   CREATE SEQUENCE property."Property_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE property."Property_id_seq";
       property          priceprophet    false    5    218                       0    0    Property_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE property."Property_id_seq" OWNED BY property."Property".id;
          property          priceprophet    false    217            �            1259    24631    _prisma_migrations    TABLE     �  CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);
 &   DROP TABLE public._prisma_migrations;
       public         heap    priceprophet    false            z           2604    24646    Property id    DEFAULT     r   ALTER TABLE ONLY property."Property" ALTER COLUMN id SET DEFAULT nextval('property."Property_id_seq"'::regclass);
 >   ALTER TABLE property."Property" ALTER COLUMN id DROP DEFAULT;
       property          priceprophet    false    218    217    218                      0    24643    Property 
   TABLE DATA           >  COPY property."Property" (id, "createdAt", bathrooms, bedrooms, city, country, "homeStatus", "homeType", "imgSrc", "isUnmappable", latitude, "livingArea", longitude, "lotAreaUnit", "lotAreaValue", price, "priceForHDP", "rentZestimate", state, "streetAddress", "taxAssessedValue", zestimate, zipcode, zpid) FROM stdin;
    property          priceprophet    false    218   �                 0    24631    _prisma_migrations 
   TABLE DATA           �   COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
    public          priceprophet    false    216   ET                  0    0    Property_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('property."Property_id_seq"', 492, true);
          property          priceprophet    false    217                       2606    24651    Property Property_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY property."Property"
    ADD CONSTRAINT "Property_pkey" PRIMARY KEY (id);
 F   ALTER TABLE ONLY property."Property" DROP CONSTRAINT "Property_pkey";
       property            priceprophet    false    218            }           2606    24639 *   _prisma_migrations _prisma_migrations_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public._prisma_migrations DROP CONSTRAINT _prisma_migrations_pkey;
       public            priceprophet    false    216            �           1259    24652    Property_zpid_key    INDEX     S   CREATE UNIQUE INDEX "Property_zpid_key" ON property."Property" USING btree (zpid);
 )   DROP INDEX property."Property_zpid_key";
       property            priceprophet    false    218                  x��}ksG����_Q��O+N��fi���ʏ���N�F�ȧ�5Ez��uu�df5��YkT֌��Zb����H�L�g�=crb�s�>���r��;�����������W_�����|���/w�����^~��_}���_�s�����������=��_����������p����ۿ����K�G���>�����O�����,W���׻���i��	����WJ�w���>���Jp��1���~��;�!��!���Z���aG`-�|����+���iq�ؙ��Jܪ�v�f3��!��)R&�y5����#bm�rɸ��r洿���+�I�y����Rq>�������nӛ����1a��yo�z�h���!�{��
�/9+��3AG|-D��g�tpBƓW ��P�`�+�i��p̩++�N
�!�X�6��υ�^�)��wwyz^n���}�j�/w��o�N8ŝ�b�W��f'��?2�+��k�jrƺ�N.hT�pBYK:���-�]~˝�bJ�#������.qӫ����;�����h�d�{���g��=���R{ȼ��Js�qƇ���fM�	���Wvo�����\j�気+�(��\w9}X��}�{\p�ڭ�6:�ۆ�{Zb���cO���KQJ�`R1Ykm�p�j�׬3��ï�H��[�O��-�˥W3VK��V�;�OJ����������5�*+*� �bp�0(��8[�{��|�*�;��P�w��p�-Ӵ�V̐�Vr9���M��z�a�⇟&��N3�ݪ�P/�0�5���R�qc3�k�1�+X�v���wD:dR^�W9�GĖgݞ�ע�Wx�bgv�w'>-��%���2L_�ߦ�0���?��s�]��P	�+��"�m%�V��*bYʙ��4ɤXy0��s٭!�VL�&:y~7�r�]�j���6�O�/Q��nzޕy1���t{AÃ[����h�+;{KĒ�9eL���*O��Z�,�9�e���JQ�����p�W��\7�yQ��o�3��w77��p�n�!�֧�.�Y��+�[m(��(��J<�*j.�&eLe��]�5핡�ܽ��\7���;z�.�Xv�p"f��W��o_߷��&!%���;�:'�����
z��7���+AJw.!�T5a�&�T
�������H|���������
�jr�Eע7���Ux]>�~��k�-j��!;�q�WD��ny6���̺��r(�d�����U
����"��m@��cH��rc]�Wb�:~/���x�yx��Xx=P�����V߯�y��˻Z߆O��P1"tuҔM�5!��T30Uvf!=317c�s.%v?��z{��v���:/�Kմ��O?܄��9�̊/2|��d,�(늗x5���r���"�f�%���/�2)cLL�pw�"�(���KGX��v�&O�^sx#�����y�X�������7k��<�er�WD�ĕ,�d&TV�����T4^.<SR^�SbS' Ni`��?	����Cx3V?|[�p���{�����e��ƛ�=d�0��j1�fe��/m^�8�6�A�m��)x�#1��ߨ�Gǂ8լ^\O?�ï9t^�? �I��prm��%\�H��%K�Z�G��"����*4�����6`�ë{qjxl9�9�	���DC�Z8��ۇ��ݻ�{R9'NX����`��$��7�� ���U������5���3:Nۛ+Gmፆ�[��yw+.���WAīiz�~�����>L�o~ϴ�iC�ӈ����b�+����!9�p�*�e�����m,:�#����I� ?��3fPr�PvEa���qq=�����ͻ8�#��h�������#��4F��|��akm�� ĕ����:���34||���h��r<�<�vN� e<:wȢ;�t/;�k�(|.�����{�F��5 ���-�1��Ŋ�7[�����&g���4 ��"{e��=�=,�o��l�'����J(7^�Ş��+ YS���G�=��mHn�C�t{��� $����R<c�ɥ���Cl�UiP��H�xo�f$�|(��F��	�R���"4ڮw�r�}}rs��9�0�U'J�oQa�i�w�٤tA��16�- <;hZ�K�-�'␖��;�y`.�py�f_�M�\Pt�k�9����i5Ps�w��^���%��9� �Wls%�,L�*@yh��e
�r;2���9���A�ٞ�~n�]X"o�o���;�|;윬Hz�K[|E��oj蒋X2�Q�d�V�G��{���B`A��P\��ݻ�!��y�e��жP�1µӃrp���9H�\yJ[��+�M�7���Ht� ��3^{�xa��/�-�Tvn഻����vCW�F�,3�{�aF��glz��nw�-�,([mU��3gG@���b/W��4e!TU�'[@-�b��LB�����>|�, N(;~a�_YTwd{�����=�o<��c{LWXµp�B��\�v���TA!d�W�Ǌ��",߁�����¶5%�zl��#	��`��l����M�<���~�ί���!\w� ��/�O�5Zi�˕}�6L�jY]�)��V@j�*�sY��Xl������}�;�G`7L���9�c��c1�Ά�<}E�u���=�;��"�  �� �W�n/WX����)xuV���C��FYkv2/SU�1g��8 \�H��=̹I=��l[�B�Լ��_�yw�o���SY
~�Xb$BǱ��r%[��*'VE�<�R�Y萂M>S���5";@�u#�Yl�9[�������z�z�M�����.�j�z�~���?M����*�_5n.CQ��\!\��
�s�!����}M��O|,��cA슬�/�R�B��UF.�=\��g|� ����Z5o~,��m�� ��ݡܴzk�� �A��u�'�(���єޫ��t�:V�]�,ܲ��fģt��"g	EJ/��8�,g�E^q�|�x`p�w���%x����Jr�w�V|��o+���r\d�+�?�l��1�e����ʎ�0�>n~ҡ]'+}a=Io`���n�}�d(�6�eǮ����4v�/��������
O_n���S��S�Spu��4���!hS`P)ɄS2��Mt�Qj�̪+���1R��@��}�Orf�/����^����=��L3vN�&F��z��Hbt��*w���=��������b���&�h��#s �Gz ���7 ��*���3x+�٬�Eg��BQ/�s�L��s�0'.M��p�Z��:�0�^]��!z�>�o��׿Y{��'��tT��[Ooc�ӕE�sA�8\r�MLbq��홪�s�P�_��o��{R����ݺy��p������ح�W���CZ���W�O��[��OK�Bɡ��jN,!��"� ���[C%~�5�D�����l�9~���}s���mS���/w�.1k�	��ʽ�H�v��o	��o�u���K@ܢ���Y̓H<Ɩ���B�
nJP'���܎T��\�fԥ� x�&�6��r���oiN}�a�E�����s��L}h��Ï?�韾�廯���՗*3� CN՗�����QA���m[���^?h����'wCϏ_ �C�$�rз��f�7���jq��\�;b{u�X�Н�`3��z�ᓓ3ł�WvL!W�s�����0��I���K���(����G�
i�Vӗ�S]\Jp�gmj(OP��Y7�����m��o�s�)�? Ex���/��o�y���&E��+f�o���pgP��j�$31��oZ��r2rw�����h�7��3�뽾@)C�N�~��/T��D��J&f]2��$��t���̔�U�2�B��������Ն�(�uMALO\�.�΍�/��� ���
"�|CZ�8�8�V��pD�r��l�u�'��#�l����'�����5uF2����[(��^]��!�CϽ
>�fV�оu^©��r�q�:H���?��c�A/e�^YDk볋L%7���h    @1��ìa4��ٝ[J����9�O�3��zG�knR|^��d�L
\�Wp9z����MxxX6��pmk�$(:x�Oᢕ���T\u�����FPztdR��e�O�$(c'������tk�c-Z����w�����#h��p��}�4�"jY���rk�c��`��A�d���XbŶ�'�\Pє^=�2��^X���],������j�gF���݈�{u�jNL�,~<�>*D��$���Ệ�`�I��1Qe��ڞ�~�+Jz�@���Հ?4%7}]�^�-�VA�f�����E���D�^�Z�^�ҁ��xV�	�H1+��*Q�Z(��@��e ��9�U�yeyCd ��Z`b�ܚ�9R��A��^��ӭ߰Q@b�-ph(&
ϩ�1ۉjtK�m��K@��w#��a� #�	�ghG����˷��ېC�[�[���q�">Ƚ\�m��h,��F��X����tQ4)S�MV�`H��J.8�A�����P��d�F��U�7�v$� e�OG���?@����A��J������H6%|͡�0R�5/Ϩ �k�1ώ��şhIJ�=>C4/u��c �ӷ����:ܴ*��N��k(�v!(� W$�� ��؊Z٬�r:¹9zj�sL�l�T� &�#���Fo0u�Iu�_�KM�F"����N��t���D@h4�ѿBYz/�^�o�gl�W#�vR��+ ��.H�]`F�E�����)�5�*5�Ԓ[�U	���*f&��W	�:y�����(�7+`M����Mx�ӧ2o�s)��Q���Ê�B�(x��"�DV��V+�X��t���Ǫ�н�����%D�9zh��:3TO��z��
;��p��>!��Tz��)Q�j�@�`źڨ�k�,�WTբJB��17ӓF����O-�s��I<r��@?�(3��C�ؽ^�2�J�����65v�J��;�έ]��%Rq���r�S����WZj�B���%9ɸ��~��:���f�UX�ߛ*��խ@�����)g�e�"���cE��y",7�t���$#�Ps+���Ƣ��/�@����>|h�c���5�F(N�Ӝk��+(�Rɰ�OԷ�<P1*��K�p>6�J�W��a�o7pJ��:���F�/�ֺ����9��>gx3l���`�Z��Y�`��Χu��:���`b.U����1%��/����9���K鄃�P=�0 ��+u*M��:��ߋF�����xu���{�B�$�4���������ן��HV�0As(Wը�K�h���
a�9�pF�t��U�ss//u��V�eǵ�4���t������M�N�zA��8�
����͊5KՊ�f$��4�M  %ỪV�����Y�2����X��-n>e(�e�{���Z6(�~x8����2�ߐ �qR�1�)h}��9&G�e���
!x�ELQS�2&,kԥ	=�h{�(��������/��|�i�ҩڒ�SkyP�m��4K؞Z��f%tQ�4�����ϟ@�ٹHN���S<���p�-w85C�B�St"{�a,�7O&�~��8+��{_��c���,��ެ�٘�Z������XM������ԄP�L.�@��bv�<7�s�����_��(���A��-E���z!{��N�p�6���JҜZ?V]��7���$�lyuѰ�,)�X�����;�q5�/�Tv*���"a%�������7��DH�g�ZP���V�A��.���"��=���,ge����~hX:�]P#�ٌI�.�=/
�t�>��.���`�d��̕��- :J^X�v�hK���΋�1I�q�����T(�l!��z�g�f���I\�K�Z�W	�A���+7��%�g��G���6|�ޮp/��v_V�?Zh��u�2f����%B�5��@�,�4tt�w��dFx�㳱tP
O7}����n�z�� 7��#�)8>��+ M�&�F����
6����p��nRW�yR�^��� F��Ր���x�cc,�y?Sv�(�D��P"�)�v0��[�w@�+pMQ��<����T��*�C���^)Q�-O���t�v�oncP3��b�K�_c��dsbB	{w�0k�w#��vD�Ȝ��o�OO]���υ�\м��?���D�Ή�S�9K�����E6�N��Ef��D�M-f��V�+��oA'� ��Ӌ�w�:l��؆���伱	��gO�k�)�������;v�� ��LF:`�R�A<��7�&�H)�U���ۙ[�"��5�mc ������n
P�����G�O�*�w{��Ո������v��5� TtK"e#�4�vq��J�
��G1Gs�]����ft��a��f����o����yx�{�Ϩ�?�����)�����"�@p�RGE2l�[�X�ey��á�ɋ3��G���?��qX���n�^�ΎZ��u{���TK� ��Qo�M�YtR��"�+И�Q�����4͠7�Q/�<��>�����@���c��D�F�G��I��'5�(OAq�V�H�̲]=����p����B��٠'��"5lmoC�ht��Y5�62k�����X��YΧ�o�܎�����1G�#�;a�n�m�Ř�V(�M�KH˥B3�ށI�q����s�)77.��tsN}�V�,)����u��2�7�8�O8��{��mj�ƏO.�S�]���"�T�p���Avʗ�������ԣEɘˊ>M�q�чW��|Ig��Y�ۂP��nA23���R��s��@+S�J��\J��v�6���O-�\ꝿ�N�\8�z�1ޤ��R툷D?=4s
M�ޜs()@-+ী#`"b���CU�/ቦ9\T��f����K��Hw`M��2�/��	����}�S�c�u��i��L|�%
���
5CTUKK`آf-�%
��w$�igԾO�K�,-iʞAݒZ�~���7��w���i^���=S!ԒrԢT`��!�C�^\�M%�����-�f.��6�c�
�UJ5:�3�'a�㓾��MJ�t��yO��|��y:�HG[J�T�+I�J�:�k(K�����J���s�$�i�I�i��䌜��~���k�'��Toj�b��T�_�u$�yBxyŘh�O����@Ukm���m ��4XD��k�xa��ӈvn/Vm׊�++l]���3�@G��4n�T��c��a�t4��tD����b(�{ }ᵬCPL���Z����>:V��i�h�s�2)���W�"��q`�F0r!��BrP�*]&��y��Br�A��u���_6ն�$1=3��Ǖ;ez�~	�*����Z�f�}�Qx|�OO=��*7��QEw�4������E4٪J�6�ҍy�cO��c�
�wa�"itQ,�L88��{�5T�`�%�f���ag�T�"���ս>����N��Yr���%RK*��%���(��������%��i���>>9b�3槓Z t�ݱ�e���T�d^ٽ�b�����f�¸u�? ����Ҥ"Q��"�˒_:j ;� ���|T�4k, ��i�<��1TQw�j٩��63����\��g���K�(�+�J����T�Zmp&��\��UD�c�<�N�w���X�sfЍg��Ch�s���ы�)<s�D"��E�#>�_���0��O�ۈ�Ad_�xd����`ԗ'9@˅���4�/��-��=���NWi<��	6iv�v��G)�:�$�w����kӢ�RoD�]�+O\sU-ωj�իT�Ĥ*��tI�3�#� �xrLb޻�F���o;�sh���??j!�n㵃�q�1!�U+qn�M*6)83g����l^K��x��6�d�D>	ؽ�v,C���R�}g�W/����I�e���	l@dzś�9�k���Ø����-�D��kB
�e�Sˌ,�d�Y����y@�:��+6R�ϸ��tm3/���<'#@�{��"#$���'ŋp��Ӟ%�h�� :�4~oAC���h�fW�b>0��#��`�fx��W`�o�oz    �8�LF`�m̕�of��঵�lc�28	��dL��F�H�>2�K�ZZy;�?��<;�xn悊"-kJ!�����&?6��4��6�������KK�`�z�Tu�^��{yw�zh~zq�����>Ě�0���Ԛq똴 »8�@�&8uu��ͫ4=�(8m{iO���b\����h���
�!�m/6�G�˅Ue��E�����yY�}�DE}뷅���i�pe��<������ܶg,��<$=6����Y��v�7�@9���s�71)��D�`3�,��^T���ͨz<&X �^�����J�[�ȁ����6c�
�Zu{���O�[�ܬ��]��
���*�bE��2�, ���J��E�Gh��iG�����v��p��֊M��M/����oi�~��Y��.&g� ͯx}�6O>�(��5OE���"DY*iͲ\��F�;��|FP<��Р����Gon��~DΙᱹ��� �KD}���۠ݭ8w���&�$3S!������[�5!5|�}����c���[�=v�_�oS9"\a{����4_U0���S��
��_9��G�**�(�x6/t΄e�Q�d��B�����:>�4�cW���}��dg�{��K7"��j��}�qw���#��5���y��@��I4"1T��i��x�!/�,4[�°\�3�s��-l?��L���T��u��}L){��/:�WO�ԴwM�O�S%S�̜kJ��P�"�֠{Yw*,��K��}��Ee�3n����u��ca��Ozf�^�%�S�s��C�M�M9ܗO �c�����M�6X��$��'ȼ؍��.�Q;TT���B���w����zwD�tԛ���df[ts���s�T3ٸiboy��GW��2�
`-AH �(��e}���S��ӆ�|V0v�g2��X������ݻ��]���p�t�kE��Zɴ�+6�~�<�`+�Y���T*�`KX�Os���(Ѕ	���7�9~z���ps7�mӋ���ؙ��@�~e��-�o4��ǀm��`��4��r���d��1�f/h��Z����+�|(�JJA�LTj��C	t�P	3����o�o74��a��1��P������R^�x�9�W��G�+SD�tPZ�x��MOM9Do�\����9��;5�{m���QT�q�t�P6}���m���K��NV:J�q3ns逆�����l9�,�HG�����䍬,1�s��%,��¨�ض���'mi�K�~Ϲ�^�9�vxv,F�q��0A���JM�K�^��S_��l��2`G��Eub��6a���o �_������v�U� �Řy�t8e�����"(�w���Ӷ�B���`Bf��ׯ���
� 5���Pn��O�sE�]�R-��,���	�Qgݐ\9Y�?�۬g>�t1�δn��o�kjq�/�ptK�Cg-�1�Q�����7ӷ�}���Sx3ޝ�/�7f/�2�1�ߋp[��h��&�@�J��_�?���a���#��|%�\�0ڷ�#T�nP�-�(
�"���/�����6��R��<��ш]����e�Yt�������^��N&8)TJ����>�KP��O���fO0�h�O{yy\�cǐy�/��+Jh�I��|�<����Ő_n8`��5zd,g��H:s�|F�2���@@�fԨ���?�yzx�E�}c�����������h�M����	j/�H¦k�J�@�MQ��E�]�!�)���D2QU��.�9��7�@�^c�8]`'�g�y�t�TA-���A3x/���{<�ʩv���g�~����;E>>��+67xe�\:!K�Y�2{�����w6.�P�e����;�������/ӫm��g_���Ю�N�{��w����n4p�F�SH|�1�T�V��jJ�-/;�5�p�����:��Kd�O��"&��F��vSn[#M�������B�J�a��"q;�������»	:�H��2]K�*-UN���83_� �x:w�J*�iP� �98��+��׷o�����
����眃�I���ԆS�u��x��4��'�:�=�|)��Z������������<���$]���ܼ	���׭2�Z>�<fߴa�4tY�Yqt�E�È��N��½���G:�C�{�/��j�r�,=��Yz���3�g�_Xa��u�ר�)�7�q��΄j�R0�5\$��W"��jA���Ud�bv�nZ-ElJ�@<��F��[��=��PK��45U��Xwm�����Z�ot���1ܰ9���u��Y�
�QrC��eB`1a�'xD���kWa�2i.@W�*�8�y��es���Ǩ �l�T�ft�&[��ޟ.����&x@����iu�m��( ���pr�!Ӕ��C�yy%*�M���uNfIi/I.ݪ0�S2�x�~
]
C�Kr�:�.]�̀�F�ҬD �%�wΔL����1ӥQ�YW��vP/(�!�;���CKwb���t�B��z\��Ƿ���7ᶴkUo���en�i�>Wt+�4k��kF$w��U�r��T�T0� ��)G��	r7�[3O�q^�+O���&�`/�����u�����[F���[�?5���Jo�]V�F2����v�\�Y1;>�� �cb�*X�*��2�f��G��w����cMU�͵ӷw���߼�s5u��,o�V�hD��K{a�Cr۪�����=�-��6��a��ʽN
a�9���B;��i��I��w|珳����g���7#�zgt�X��^���쥻k]b�7ֵ+QV���>��K����2\K��܎���3�݁�x�����3V���Ki�%�nL��vn�[������!(�9wAi���OW7v�}D���%+cU4�4����%������^���{\5�A�Y8;��r;wOӐz>��6�b|c�����6���U�?��W����9qF}��W�	8��ed��74��|< �D�s��SxQI����ps}O��Zq��%1Ko���lҞ�~Rx�:�7��Z��!sa5��L����|J���.�����hR�zk�#������ݛ���?��m����f�h��Ԛ6��;�M;@��+;'6z�'��(�Ȝ.�+*���4���q�`<��}_��'�*6��k³��o�⍀�щX�ش�N���A�_G�b��^��5��	��U������X�w%:�#O��Oڼ��;{�f,�h�k/u�y�ml��Q�NJ����UO��6;�L�v��%�9+D߬5�}����Q��:k�g�� �='}�4^���W���Cᒎ��5M(��;]�W �������Tf��+pdZ
:ƤJ9,�ݙ��t�}*���[�䓑���)@7"+�)X	q^��Fю^	f�l���SU[W���8'5�h�Eq�S�f9�ёe�{��C���p���Cߵ����M	��� T�/��y��K)�8��G���X��F�X%WQ|�6VV��=��D{_ڸ7g�ƀ�O�\����t�h��٥}F�{^�#G�9&$�J�AU.�=TnT�!�T�f�L��_8p�.go&�y cpм�P�f�N�D���9�ę���m/�ـ蝚mX���E�����]LN��3��Y��c�B�]�嶱������}.yo6��w
W���BiWvx�%VW�}dJ�v�����,W��������IiF#����t"{�T��cAD�D����rH}F9�@�iG�F��A�u;�� ��HD;-c�"���Qg�J���G�4w�oG���<���@]]�}�Mso�Z����!��a)\�B�N�(zek�d�M��q�p��,�b�����/�l�+>67ݑqJC�|�1Rg�lИӽ�݋@�z��ӝM�X
��^Ԕ����U��C�w���LQ�C2�ҽ|5�P.p
s� �>�0j�[*t�P�Ҧ�����1f.�{�B�[��v#X� ��E�V�����9��W�<�*�����ۮw���i ��{�/]�v����<�-:=�@Z � Q  r��c����+&I��%K��ٙ�m@�P�RZ0~L%��c�Z°�Z��U�z���&P&���o��;�w}::�O�U�����Zc�P�'�3*���P�/A��_��c������t
��*���� �3H�¶�q�z� �J�1z`тN`IV8]�C�50(]�T��!��gm�Z�>��H��$iUO��{[����s-c4>�����h�
����&�W�
R�;VCٰ,ܩX�2Q���m�6r���r6��}�z�>-�#�5P��ğW����cŒy�;�*�aE�YV��I�p1�T��tj?��}�,;O���n���p2f�Uˮ�]��b@��^��l����d��Y��zG�#���,��e@ftjq�b����6��X�ֳ;�����è��5{�L�j��1��$��������.9h�`Vg+�1C4IW�+�J�eʄ���R��)�t0�1#h^$Mh�Q7�@�a��v\��(44J�,�$���(H%ƒHJQW_�	�B#`،_����a�62�7��R���	/���j,	�����b,�I>��o�㸱U�T Ѐ�~c{�Q�@�e�&++g�ils�0�����қ)��Ip}�'YܦN7�Ҷ����2M&�PbCX՛V=����_+M��z�d W�K9�����s��g�"[:3↏Y�#��*{|��;;Z�@�:��.��ڤ]�C���*x�m����)���k�KZ��][��RP8[	'5��3x��4����A{�Z�C=�
tW���M�ū'�~�=���<�M�V��7g	X5�8 ��0���9`[�xq	�x���}Qڟ���1�p���Q 5����u�c�e�/�I����Vl%^���,1�h�+\����6;f����s3Φ��\�J�:��{�[���p8�s������8����-��ط�W��b/��3��\�p/S��'�u�<m%�x��3[g�����>[O�C�}��l�ӏ�YZ��I�����)�:BB�[D��J$�E��x&�n	D86�ݙ�� �63����׮���O@n�^��ASC�^��4�s��Zl�'�m�G#A���x�I[�U*���pQ�%�-��J��f��ϧ�K�ç_�\?��~�ޒpڍ��N��o�6뭒�IƤU��e#���
Lܔ�
%����}6 ޵���E����@��.�Ԧw���#�t��m����� ��V�MS��Lz���~�
>}��i��\����N�H��v>&='� ��qf��� ����x_����:�&�?��s�(���!9�v,\S|�.�h.�>�s��<�O��L�yz�N�5�F�{��M��o�iP�Px_�Y�=-�ފK#:g|o�c>��,Xw5���_�[��/s�ə�}�c�6�&<���,<"�<X��<��OO�h��#jCA�D'���A�jJ[���SU�d�n�]*�M��ѝ��ս?�z��3��6���>����G���\�����&7�9�p�Q�#9��S�]�U��c�P��Q��c:pyͪjW�|C����B�W� ������q����)~��];+���d�r]C. Ϡ�,���\Y(�:�t�妡�=x9)7�x7}�:��E�#�C,��'b��G���-�BfZ(��ט8���n�>��; ����>���N��"��A����������'I#�ts��+����VY���E�������0�MY��b��;f�����ܳ�B�ٚ��������v�:�£#&�e�����Fś�%W��AD������@*�x#4�_e�Ŷgw�-G��k����Qc�h��?�-�W��V6�ުN�� ˠ!|�Q�8D�|ND�`9���=��)quz��81��MK�sp��:�О�1��ݒF�)v��+��6�s3�V"
����,�j몫���3��ȁ�h��+.�$һ����7���pSFz�)]3%N#�(y���.gro�e���nm�:y����u���S����c�l��g}&�k�/x�m{~�.�zR�f���Ѧ?B��y;x��β�C�йKIE�����b9�ъ�(7��r>�Py�МN	4SWW��L����G��,l^7@.V$6��JW&��ayQaM.,1�B���JVm87\>IC����%��u�Mw�ףo�h~���E�~���OF���UuG���j��a:!hZ8p��l����7E���[M,pM7��a�S©��r%pm�k�%�fa"��>���
+�.2�K�%a�0̙c�ϔ�v\]2fNP�����Jz�<~ԳG���AB)���@��p�VXt����t��eU���l⢠%��]d07��%���9���S�(�e~�>)N��>�ݒ�+����*�`��kϓ��ӄ
�N��ִ֗e%��̕,�Z�9vy�)B��JX]ޯN���t������O�-rq��$b@@e[�V�l�� �w�x�I��G��u���C�/���Z&��'rv֊:K4��F@�+@īv��f@�g�])9Öv�T:EF�1��t_�&�T?5r�SJ9Ƽv��z����h�����t��U��\ɽR+É?V�Ǌ+�Y�U(Sd��r�	O�}��ͽ��xf�''������-���M�\�������pu_����V�W;�����T�-B��A1��@�As�m)Ǘ���Dxf�?�m�����,�Aa��t9k@'ն�(=u9��!��J���6�P���зWEr�RE�2��].��d���`u��,��l�Z���{x���Y������wO)�H�+�s��YFEl��W9�,�31s|PJ|�窀Ut;s6W��8���Ő��ο�xO�>�-_����G �M�&�ݹ���i�X�p��*���"�}�Fe��T�
�Y���Ӵ��y`s�h�]w���� �%��'��="��6����E�I�WjE�No�@�U�9����K( �x��`�,%yN#��փ���Y?��7���s�Ƒ���%%���[��|�� VI���Vv���i���7S�:F<INܺ(��hhvR�6-���C��R��C����8h��zt���?n���?W����H2/P         �   x�m�K
�0��)z�gɲ��'()�W���Mo�Ϻ0�a��@{Ӕ��
Ò2[��[8SŤ�}T�^06S'�ڽ���lX�Ź�[�K{�҈�Z�"��J�&Љ��,�s�d���B��d���#���x�~���������(�*�Q�o�y��x�4r     