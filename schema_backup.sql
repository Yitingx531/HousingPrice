--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.4 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: property; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA property;


ALTER SCHEMA property OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: HouseDetails; Type: TABLE; Schema: property; Owner: priceprophet
--

CREATE TABLE property."HouseDetails" (
    id integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    price integer NOT NULL,
    "abbreviatedAddress" text NOT NULL,
    city text NOT NULL,
    state text NOT NULL,
    zipcode integer NOT NULL,
    bedrooms integer NOT NULL,
    bathrooms integer NOT NULL,
    "livingArea" double precision NOT NULL,
    longitude double precision NOT NULL,
    latitude double precision NOT NULL,
    "hiResImageLink" text NOT NULL,
    description text NOT NULL,
    "responsivePhotos" jsonb NOT NULL
);


ALTER TABLE property."HouseDetails" OWNER TO priceprophet;

--
-- Name: HouseDetails_id_seq; Type: SEQUENCE; Schema: property; Owner: priceprophet
--

CREATE SEQUENCE property."HouseDetails_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE property."HouseDetails_id_seq" OWNER TO priceprophet;

--
-- Name: HouseDetails_id_seq; Type: SEQUENCE OWNED BY; Schema: property; Owner: priceprophet
--

ALTER SEQUENCE property."HouseDetails_id_seq" OWNED BY property."HouseDetails".id;


--
-- Name: PriceHistory; Type: TABLE; Schema: property; Owner: priceprophet
--

CREATE TABLE property."PriceHistory" (
    id integer NOT NULL,
    date timestamp(3) without time zone NOT NULL,
    price double precision NOT NULL,
    "houseId" integer NOT NULL
);


ALTER TABLE property."PriceHistory" OWNER TO priceprophet;

--
-- Name: PriceHistory_id_seq; Type: SEQUENCE; Schema: property; Owner: priceprophet
--

CREATE SEQUENCE property."PriceHistory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE property."PriceHistory_id_seq" OWNER TO priceprophet;

--
-- Name: PriceHistory_id_seq; Type: SEQUENCE OWNED BY; Schema: property; Owner: priceprophet
--

ALTER SEQUENCE property."PriceHistory_id_seq" OWNED BY property."PriceHistory".id;


--
-- Name: Property; Type: TABLE; Schema: property; Owner: priceprophet
--

CREATE TABLE property."Property" (
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


ALTER TABLE property."Property" OWNER TO priceprophet;

--
-- Name: Property_id_seq; Type: SEQUENCE; Schema: property; Owner: priceprophet
--

CREATE SEQUENCE property."Property_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE property."Property_id_seq" OWNER TO priceprophet;

--
-- Name: Property_id_seq; Type: SEQUENCE OWNED BY; Schema: property; Owner: priceprophet
--

ALTER SEQUENCE property."Property_id_seq" OWNED BY property."Property".id;


--
-- Name: User; Type: TABLE; Schema: property; Owner: priceprophet
--

CREATE TABLE property."User" (
    id integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    email text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE property."User" OWNER TO priceprophet;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: property; Owner: priceprophet
--

CREATE SEQUENCE property."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE property."User_id_seq" OWNER TO priceprophet;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: property; Owner: priceprophet
--

ALTER SEQUENCE property."User_id_seq" OWNED BY property."User".id;


--
-- Name: PriceHistory_id_seq; Type: SEQUENCE; Schema: public; Owner: priceprophet
--

CREATE SEQUENCE public."PriceHistory_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."PriceHistory_id_seq" OWNER TO priceprophet;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: priceprophet
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO priceprophet;

--
-- Name: HouseDetails id; Type: DEFAULT; Schema: property; Owner: priceprophet
--

ALTER TABLE ONLY property."HouseDetails" ALTER COLUMN id SET DEFAULT nextval('property."HouseDetails_id_seq"'::regclass);


--
-- Name: PriceHistory id; Type: DEFAULT; Schema: property; Owner: priceprophet
--

ALTER TABLE ONLY property."PriceHistory" ALTER COLUMN id SET DEFAULT nextval('property."PriceHistory_id_seq"'::regclass);


--
-- Name: Property id; Type: DEFAULT; Schema: property; Owner: priceprophet
--

ALTER TABLE ONLY property."Property" ALTER COLUMN id SET DEFAULT nextval('property."Property_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: property; Owner: priceprophet
--

ALTER TABLE ONLY property."User" ALTER COLUMN id SET DEFAULT nextval('property."User_id_seq"'::regclass);


--
-- Name: HouseDetails HouseDetails_pkey; Type: CONSTRAINT; Schema: property; Owner: priceprophet
--

ALTER TABLE ONLY property."HouseDetails"
    ADD CONSTRAINT "HouseDetails_pkey" PRIMARY KEY (id);


--
-- Name: PriceHistory PriceHistory_pkey; Type: CONSTRAINT; Schema: property; Owner: priceprophet
--

ALTER TABLE ONLY property."PriceHistory"
    ADD CONSTRAINT "PriceHistory_pkey" PRIMARY KEY (id);


--
-- Name: Property Property_pkey; Type: CONSTRAINT; Schema: property; Owner: priceprophet
--

ALTER TABLE ONLY property."Property"
    ADD CONSTRAINT "Property_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: property; Owner: priceprophet
--

ALTER TABLE ONLY property."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: priceprophet
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: PriceHistory_houseId_idx; Type: INDEX; Schema: property; Owner: priceprophet
--

CREATE INDEX "PriceHistory_houseId_idx" ON property."PriceHistory" USING btree ("houseId");


--
-- Name: Property_zpid_key; Type: INDEX; Schema: property; Owner: priceprophet
--

CREATE UNIQUE INDEX "Property_zpid_key" ON property."Property" USING btree (zpid);


--
-- Name: User_email_key; Type: INDEX; Schema: property; Owner: priceprophet
--

CREATE UNIQUE INDEX "User_email_key" ON property."User" USING btree (email);


--
-- Name: PriceHistory PriceHistory_houseId_fkey; Type: FK CONSTRAINT; Schema: property; Owner: priceprophet
--

ALTER TABLE ONLY property."PriceHistory"
    ADD CONSTRAINT "PriceHistory_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES property."HouseDetails"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: SCHEMA property; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON SCHEMA property TO priceprophet;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT ALL ON SCHEMA public TO priceprophet;


--
-- PostgreSQL database dump complete
--

