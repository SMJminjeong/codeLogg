--- slug: TroubleShooting/React-TS2345 title: React-TS2345 author: MinJeong author_title: Software Developer author_url: ttps://github.com/SMJminjeong author_image_url: https://i.ibb.co/hX6xc0V/MJMW0830.jpg tags: [software] ---

TS2345: Argument of type CancellablePromise<void> is not assignable to parameter of type SetStateAction<IGroupTalk[]> Type CancellablePromise<void> is not assignable to type (prevState: IGroupTalk[]) => IGroupTalk[] Type Promise<void> & { cancel(): void; } provides no match for the signature (prevState: IGroupTalk[]): IGroupTalk[]
